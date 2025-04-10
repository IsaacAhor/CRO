from agno.agent import Agent
from agno.models.openai import OpenAIChat

class ComAgent(Agent):
    """
    ComAgent evaluates business documents for legal and regulatory compliance. It flags missing tax identifiers, expired licenses, and potential violations that could expose the business to regulatory penalties.
    """
    name = "ComAgent"
    role = "Evaluates business documents for legal and regulatory compliance"
    model = OpenAIChat(id="gpt-4o")
    markdown = True

    def run(self, task, files=[]):
        return {"content": "TODO"}
