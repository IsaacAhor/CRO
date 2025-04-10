from agno.agent import Agent
from agno.models.openai import OpenAIChat
from typing import Optional, List, Dict
from agents.fin_agent import FinAgent
from agents.doc_agent import DocAgent


class GhostCRO_SuperAgent:
    """
    SuperAgent that coordinates all domain-specific agents in GhostCRO.
    """
    def __init__(self):
        self.fin_agent = FinAgent()
        self.doc_agent = DocAgent()
        # Placeholder for future agents
        # self.com_agent = ComAgent()
        # self.ope_agent = OpeAgent()
        # self.mar_agent = MarAgent()

    def run(self, task: str, files: Optional[List[object]] = None) -> Dict[str, str]:
        """
        Accepts a task and optional uploaded files,
        routes them to the appropriate agent, and returns the result.
        """
        # If files are provided, classify them and route to appropriate agent
        if files:
            try:
                doc_type = self.doc_agent.classify_document(files)
                agent_mapping = {
                    "financial": self.fin_agent,
                    # Add other agent mappings here when agents are implemented
                    # "operational": self.ope_agent,
                    # "market": self.mar_agent,
                    # "compliance": self.com_agent
                }

                if doc_type in agent_mapping:
                    return agent_mapping[doc_type].run(task, files=files)
                else:
                    return {
                        "content": f"🛑 Sorry, document type '{doc_type}' not yet supported."
                    }

            except Exception as e:
                return {"content": f"Error in document classification: {str(e)}"}

        # If no files are provided, politely inform the user
        return {"content": "⚠️ A file is required for this task. Please upload a relevant document to proceed."}


if __name__ == "__main__":
    app = GhostCRO_SuperAgent()
    # Example with no files (will trigger polite feedback)
    result = app.run("Evaluate financial health of this business", files=[])
    print(result["content"])

    # Example with files (replace with actual files in testing)
    # result = app.run("Evaluate financial health of this business", files=[your_file_here])
    # print(result["content"])
