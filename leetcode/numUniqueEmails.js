/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  // separated by @, we may need to split it so
  // dots in local names should be removed to treat as a valid email
  // + should cut out everything after them, so the valid email everything before the +
  // no "+" in domain names are present, so basically . and + should be handled only when they appear in local names
  // emails must be unique (we could use hashtable to store them or set !)
  // set is unique in javascript

  const set = new Set(); // add and then we
  // the output is a number of emails we just return set.count
  // we just keep counter while adding to the set, we use has() to check if it present in a set or not, if not we add it to the set and increase counter
  // we return the counter at the end

  let count = 0;
  for (let i = 0; i < emails.length; i++) {
    const [localName, domainName] = emails[i].split("@");
    let [name] = localName.split("+");
    name = name.replace(/\./gi, "");
    const validEmail = `${name}@${domainName}`;

    if (!set.has(validEmail)) {
      set.add(validEmail);
      count += 1;
    }
  }

  return count;
};
