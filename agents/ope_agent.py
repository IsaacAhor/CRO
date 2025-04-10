from agno.agent import Agent
from agno.models.openai import OpenAIChat

class OpeAgent(Agent):
    """
    OpeAgent reviews operational data including transaction histories, payment cycles, and vendor interactions. It detects inefficiencies, cash flow mismatches, and process bottlenecks, helping SMBs improve operational stability.
    """
    name = "OpeAgent"
    role = "Reviews operational data and detects inefficiencies"
    model = OpenAIChat(id="gpt-4o")
    markdown = True

    def run(self, task, files=[]):
        return {"content": "TODO"}
