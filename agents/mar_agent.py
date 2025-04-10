from agno.agent import Agent
from agno.models.openai import OpenAIChat

class MarAgent(Agent):
    """
    MarAgent monitors external market and economic conditions that may impact the business. It assesses risks related to industry trends, currency fluctuations, geopolitical instability, and inflation exposure.
    """
    name = "MarAgent"
    role = "Monitors external market and economic conditions"
    model = OpenAIChat(id="gpt-4o")
    markdown = True

    def run(self, task, files=[]):
        return {"content": "TODO"}
