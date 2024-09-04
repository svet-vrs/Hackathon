import logging
import openai
from langsmith.wrappers import wrap_openai
from langsmith import traceable
from kiba_backend import MAIN_PROMPT_DE
from kiba_backend.demo_user import demo_user_data
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

def process_conversation(conversation):
	if len(''.join(conversation)) < 50:
		return
	return pipeline(MAIN_PROMPT_DE + '\n\n' + '...'.join(conversation))

def carry_out_HIL_action(action):

	if action == 'LOAD_USER_DATA':
		return demo_user_data

	if action == 'LOAD_PFLEGE_ANTRAG':
		return {
			'fields': [
			['boolean', 'Erstantrag'],
			['boolean', 'Einstufung in einen höheren Pflegegrad'],
			['boolean', 'Änderung'],
			['string', 'PLZ'],
			['string', 'Ort'],
			['string', 'Straße'],
			['boolean', 'Pflegegeld']
			''
			]
		}

	if action == 'SEND_EMAIL':
		return {
		'fields': [
		['string', 'Zusammenfassung der Konversation']]
		}

	raise NotImplementedError
