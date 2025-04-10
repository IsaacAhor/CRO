def compute_all_ratios(data: dict) -> dict:
    """
    Computes various financial ratios from the provided financial data.

    Args:
        data (dict): A dictionary containing financial data with keys such as 'revenue', 'net_income', 'current_assets', etc.

    Returns:
        dict: A dictionary containing the computed financial ratios.
    """
    # Extract financial data
    revenue = data.get('revenue', 0)
    net_income = data.get('net_income', 0)
    current_assets = data.get('current_assets', 0)
    current_liabilities = data.get('current_liabilities', 0)
    total_assets = data.get('total_assets', 0)
    total_liabilities = data.get('total_liabilities', 0)
    equity = data.get('equity', 0)
    ebit = data.get('ebit', 0)
    interest_expense = data.get('interest_expense', 0)

    # Compute financial ratios
    current_ratio = current_assets / current_liabilities if current_liabilities != 0 else 0
    debt_to_equity_ratio = total_liabilities / equity if equity != 0 else 0
    interest_coverage_ratio = ebit / interest_expense if interest_expense != 0 else 0
    net_profit_margin = net_income / revenue if revenue != 0 else 0
    return_on_assets = net_income / total_assets if total_assets != 0 else 0
    return_on_equity = net_income / equity if equity != 0 else 0

    # Return the computed ratios
    return {
        'current_ratio': current_ratio,
        'debt_to_equity_ratio': debt_to_equity_ratio,
        'interest_coverage_ratio': interest_coverage_ratio,
        'net_profit_margin': net_profit_margin,
        'return_on_assets': return_on_assets,
        'return_on_equity': return_on_equity
    }
