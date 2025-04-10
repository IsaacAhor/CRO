from agno.agent import Agent
from agno.models.openai import OpenAIChat

class DocAgent(Agent):
    """
    DocAgent classifies uploaded business documents (PDF, CSV, Excel) such as bank statements, P&Ls, and invoices. It routes them to the appropriate risk analysis agent for evaluation.
    """
    name = "DocAgent"
    role = "Classifies and routes business documents"
    model = OpenAIChat(id="gpt-4o")
    markdown = True

    def run(self, task, files=[]):
        return {"content": "TODO"}
