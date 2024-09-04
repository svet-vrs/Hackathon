import os
from datetime import datetime

from kiba_backend.config import KIBA_DB_URL
from kiba_backend.kiba_db_model import Base, customer_data
from sqlalchemy import create_engine, text
from sqlalchemy.dialects.sqlite import insert
from werkzeug.security import generate_password_hash

engine = create_engine(KIBA_DB_URL, echo=True)
Base.metadata.create_all(engine)

conn = engine.connect()

print('Successfully executed DDL')


def seed_initial_user():
    user_args = dict(pid=0,
                     BEARBEITER='dev_user',
                     BEARBEITER_LDAP_ID=0,
                     PASSWORD=generate_password_hash(
                         os.environ['KIBA_ADMIN_PANEL_PASSWORD']))
    stmt = insert(User).values(**user_args)
    stmt = stmt.on_conflict_do_nothing()
    conn.execute(stmt)


if os.environ.get("KIBA_ADMIN_PANEL_PASSWORD", None) is not None:
    print('seed_initial_user')
    seed_initial_user()
    conn.commit()


customer = {
    'customer_firstname': 'Thea'
    'customer_sirname': 'Sprenger'
    'customer_health_id': 'M2384372',
    'customer_birth_date': datetime(year=2000, month=1, day=30)
}


stmt = insert(customer_data).values(**customer)
stmt = stmt.on_conflict_do_nothing()
conn.execute(stmt)