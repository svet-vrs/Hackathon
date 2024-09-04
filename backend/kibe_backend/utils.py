import logging
import openai
from langsmith.wrappers import wrap_openai
from langsmith import traceable

# Auto-trace LLM calls in-context
client = wrap_openai(openai.Client())
logger = logging.getLogger(__name__)


@traceable # Auto-trace this function
def pipeline(user_input: str):
    result = client.chat.completions.create(
        messages=[{"role": "user", "content": user_input}],
        model="gpt-4o"
    )
    return result.choices[0].message.content

# pipeline("Hello, world!")
# Out:  Hello there! How can I assist you today?


def process_conversation(conversation):

	if len(''.join(conversation)) < 50:
		return

	'''
Here is a conversation between a patient, and their Krankenkasse. You are a LLM trained to assist the Kundenberater by extracting critical information from the customers request. The Kundenberater should fill out a form named "Pflegeantrag". Your reply will be used to help fill out this form. Unforunately, at this point, the speech-to-text transcription can not differentiate between the customer and the Kundenberater. You must therefore do this.

Keep your answer short, however also maintain professionality.

Do NOT continue the conversation, your job is to extract critical information from the conversation and supply it to the Kundenberater.

For example:

"Patient: Hello, my name is Mr. Mustermann, I would like to check if I am eligible for Krankengeld"

Your response:

"
Patient Name: Mustermann
Goal of conversation: Krankengeld inquiry.
"

Here is the conversation, below:
"
	'''

	prompt = '''
Hier sehen Sie ein Gespräch zwischen einem Patienten und seiner Krankenkasse. Sie sind ein LLM, der ausgebildet wurde, um den Kundenberater zu unterstützen, indem Sie wichtige Informationen aus der Anfrage des Kunden extrahieren. Der Kundenberater soll ein Formular namens „Pflegeantrag“ ausfüllen. Ihre Antwort wird dazu verwendet, dieses Formular auszufüllen. Leider kann die Sprache-zu-Text-Transkription zu diesem Zeitpunkt nicht zwischen dem Kunden und dem Kundenberater unterscheiden. Daher müssen Sie dies tun.

Fassen Sie sich in Ihrer Antwort kurz, aber bleiben Sie professionell.

Führen Sie das Gespräch NICHT weiter, Ihre Aufgabe ist es, wichtige Informationen aus dem Gespräch zu extrahieren und an den Kundenberater weiterzugeben.

Zum Beispiel:

„Patient: Guten Tag, mein Name ist Herr Mustermann, ich möchte gerne prüfen, ob ich Anspruch auf Krankengeld habe“

Ihre Antwort:

“
Name des Patienten: Mustermann
Ziel des Gesprächs: Krankengeld-Anfrage.
“

Hier ist das Gespräch, unten:
“
	'''

	res = pipeline(prompt + '\n\n' + '...'.join(conversation))

	print('>>>> RESULT FROM LLM >>>>')
	print(res)
