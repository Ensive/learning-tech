# Hello, let's learn Python

## AI/ML

NumPy
Pandas
PyTorch
SciPi

## helpful methods

REPL methods: help(), type(), dir()

## None, True, False

when division:
// - integer back
otherwise always float

## min(), max(), round()

## strings

""" a very long string, print()
.replace()
.strip()
.format() - old way of formatting
.upper() - immutable

## list

.pop() - mutates
.sort() - mutates
.append() - mutates
.remove(value) - mutates
len()
.reverse() - mutates
.insert(index, item)

"Anton" in names -> True/False
names.index("Zelong")

## math.floor, math.int

## sorted([]) - immutable returns value, [].sort() - mutates

## tuple (immutable) https://practical.learnpython.dev/03_sets_tuples_dicts/10_tuples/

student = ("Anton", 32, "Engineer")
name, age, occupation = student

## set

unique values
{}, set()
set can only include immutable types (only hashable values)

add(value)
discard(value)
.update()
item in set
| union

her_hobbies = {"sex", "drink", "love"}
my_hobbies = {"sex", "ai", "travel"}
my_hobbies | her_hobbies => {'ai', 'love', 'travel', 'sex', 'drink'}

