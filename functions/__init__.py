import smtplib as sm
from email.utils import formataddr
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
import os
from dotenv import load_dotenv
import datetime as dt

# PLAIN TEXT
plain_text = """
Hi, {name},

Thank you for reaching out

I received your email with the following message:

{message}

I will review your message and answer as soon as I can
"""

date = dt.date.today()
social_list = ["github", "linkedin", "twitter", "instagram"]

load_dotenv()

# Credentials
my_email = os.getenv("EMAIL")
password = os.getenv("PASS")
me = os.getenv("MY_NAME")

with open("./functions/email.html", 'rb') as html:
    html_content = html.read().decode("UTF-8")


def auto_respond_email(name, email, message):
    """
    Send emails from contact page using smtplib,
    need to provide name, email and the message
    sent for the client of the recipient to personalise the emails

    Args:
        name (String): Name of the recipient of the email
        email (String): Email address of the recipient
        message (String): Message written by the client
    """

    msg = MIMEMultipart('alternative')
    msg['From'] = formataddr(('Daniel', my_email))
    msg['To'] = formataddr((name, email))
    msg['bcc'] = formataddr(('Daniel', my_email))
    msg['subject'] = f"Hi, {name}. Thank you for contacting me"
    part1 = MIMEText(plain_text.format(name=name, message=message), 'plain')
    part2 = MIMEText(html_content.format(name=name,
                                         message=message,
                                         date=date.strftime('%d %B, %Y'), year=date.year), 'html')  # noqa E501

    msg.attach(part1)
    msg.attach(part2)

    # Embedding images
    for social in social_list:
        with open(f"functions/images/{social}-logo.png", "rb") as fp:
            social_image = MIMEImage(fp.read())
        social_image.add_header('Content-ID', f'<{social}>')
        msg.attach(social_image)

    with open("functions/images/Logo.png", 'rb') as fp:
        logo = MIMEImage(fp.read())
    logo.add_header('Content-ID', '<logo>')
    msg.attach(logo)

    with open("functions/images/avataaars 1.png", 'rb') as fp:
        msgImage = MIMEImage(fp.read())
    msgImage.add_header('Content-ID', '<image1>')
    msg.attach(msgImage)

    with sm.SMTP_SSL("smtp.gmail.com") as connection:
        # connection.starttls()
        connection.login(my_email, password)
        connection.send_message(msg)


def email_sender(name, email, email_html):
    print(name, email, email_html)
