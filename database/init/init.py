#%%
import psycopg2
from psycopg2 import sql
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

#%%
#provide valid connection string
conn = psycopg2.connect(dbname='postgres', user='postgres', 
                        password='pwd', host='localhost')
cur = conn.cursor()
conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

#%%
#drop if exists
cur.execute("drop database if exists maindb")

#create new database
cur.execute("create database maindb")

#%%
conn = psycopg2.connect(dbname='maindb', user='postgres', 
                        password='pwd', host='localhost')
cur = conn.cursor()
conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

#%%

#add schema
cur.execute("create table users( \
        id bigserial primary key \
    )")

# %%
cur.close()
conn.close()
# %%

#cur.execute("drop table users")
# %%
