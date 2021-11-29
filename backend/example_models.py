from dataclasses import dataclass


@dataclass(frozen=True)
class Company:
    """
    Company is a Domain Model and Not a Database one. 
    """
    pk: int  # pk stand for primary_key
    country: str
    industry: str


# TODO: Add any other model
