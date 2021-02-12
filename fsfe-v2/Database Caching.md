# Database caching

Is the way to reduce load on database server which allows to scale efficiently

## Caching data stores

- cassandra
- redis
- memchached

quiet often these storages are in-memory storages

- extremely fast
- highly distributed
- high write scenarios

## Problems

- you may loose data (because of in-memory) because of power outage

## Strategies

- write trough cache (when you write to the cache you also write to the database layer under it) - because of this writes are slowed down tremendously - may work when you have a lot more reads in your system
- write back cache (background )

## Learn more

