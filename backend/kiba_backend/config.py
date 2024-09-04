import os

KIBA_DB_URL = os.environ.get('LSERD_DB_URL', 'sqlite+pysqlite:///kiba-db.sqlite')