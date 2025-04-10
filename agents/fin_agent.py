from agno.agent import Agent
from agno.models.openai import OpenAIChat
from cro.tools.ratios_engine import compute_all_ratios

class FinAgent(Agent):
    """
    FinAgent analyzes financial documents such as income statements, balance sheets, and bank statements. It calculates key financial and credit ratios, flags liquidity and solvency risks, and suggests corrective actions to improve financial health.
    """
    name = "FinAgent"
    role = "Analyzes financial documents and suggests corrective actions"
    model = OpenAIChat(id="gpt-4o")
    markdown = True

    def run(self, task, files=[]):
        # Simulate structured financial input data
        data = {
            "revenue": 100000,
            "net_income": 4000,
            "current_assets": 30000,
            "current_liabilities": 25000,
            "cash": 5000,
            "inventory": 7000,
            "total_assets": 90000,
            "total_liabilities": 60000,
            "equity": 30000,
            "ebit": 8000,
            "interest_expense": 3000,
            "loan_repayments": 10000,
            "ebitda": 12000
        }

        # Compute financial ratios
        ratios = compute_all_ratios(data)

        # Define thresholds for flags
        flags = {
            "current_ratio": lambda v: "✅" if v >= 1.5 else "⚠️" if v >= 1.0 else "🚨",
            "net_profit_margin": lambda v: "✅" if v >= 0.1 else "⚠️" if v >= 0.05 else "🚨",
            "debt_to_equity_ratio": lambda v: "✅" if v <= 1.5 else "⚠️" if v <= 2.0 else "🚨",
            "dscr": lambda v: "✅" if v >= 1.5 else "⚠️" if v >= 1.2 else "🚨",
            "interest_coverage_ratio": lambda v: "✅" if v >= 2 else "⚠️" if v >= 1 else "🚨",
            "return_on_assets": lambda v: "✅" if v >= 0.07 else "⚠️" if v >= 0.04 else "🚨",
            "return_on_equity": lambda v: "✅" if v >= 0.12 else "⚠️" if v >= 0.07 else "🚨",
        }

        # Format the ratios into a markdown string
        markdown = "## Financial Risk Summary\n\n"
        for key, value in ratios.items():
            name = key.replace('_', ' ').title()
            flag = flags.get(key, lambda v: "")(value)
            markdown += f"**{name}**: {round(value, 2)} {flag}\n"

        # Return the formatted markdown content
        return {"content": markdown}
