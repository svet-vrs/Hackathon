from datetime import datetime

from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column


class Base(DeclarativeBase):
    pid: Mapped[int] = mapped_column(primary_key=True)

'''
class User(Base):
    __tablename__ = "USER"
    BEARBEITER_LDAP_ID: Mapped[int]
    BEARBEITER: Mapped[str]
    PASSWORD: Mapped[str]

    # Flask-Login integration
    @property
    def is_authenticated(self):
        return True

    @property
    def is_active(self):
        return True

    @property
    def is_anonymous(self):
        return False

    def get_id(self):
        return self.BEARBEITER_LDAP_ID

    # Required for administrative interface
    def __unicode__(self):
        return self.BEARBEITER
'''

class customer_data(Base):
    __tablename__ = "customer_data"
    customer_health_id: Mapped[str]  # eg M3028419
    customer_birth_date: Mapped[datetime]  # eg 30.01.2001