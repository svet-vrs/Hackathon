import langchain
# workaround circular import error
langchain.verbose = False
langchain.debug = False
langchain.llm_cache = False

from langchain_openai import ChatOpenAI

llm = ChatOpenAI()
llm.invoke("Hello, world!")