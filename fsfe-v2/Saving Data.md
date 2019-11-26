# Saving Data

## Files

Problems of storing data in files

- files are not optimized for reading in the beginning, middle, at the end
- it's not portable and lives on one server, hard to share across the servers
- writing to file means requires writing to hard disk (the slowest level of caching)
- persisting across thousands of servers is not scalable

Cache levels

- memory cache
- cpu cache ? (L1 - L4 levels of cache)
- hard drive cache

## Databases

Relational
Strict schema
Structure ahead of time

- SQL database - structured query language
- Tables
- Related data
- Strict structure
- indexedDB

Non-relational (nosql, data agnostic, loose structure)

- redis (key value store)
- elastic
- mongoDB (documents)
- cassandra
- couchdb
