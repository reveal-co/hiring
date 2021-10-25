from typing import Set


class MailerAdapter:
    """
    For Outbound Adapters you need to define classes/methods/interfaces and specify their signature
    but the body should remain empty (cf following example)
    """
    def send_mail(self: "MailerAdapter", recipients: Set[str], title: str, content: str) -> None:
        raise NotImplemented
