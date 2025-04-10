from agents.fin_agent import FinAgent

# Instantiate the agent
agent = FinAgent()

# Call its run method
result = agent.run(task="analyze this", files=[])

# Print the result
print(result["content"])
