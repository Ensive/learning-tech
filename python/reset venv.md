To reset your virtual environment, remove all installed packages, and reinstall everything from your cleaned `requirements.txt`, follow these steps:

### Step 1: Deactivate and Remove the Existing Virtual Environment
If your virtual environment is currently active, deactivate it:
```bash
deactivate
```

Then, delete the virtual environment directory:
```bash
rm -rf venv
```

### Step 2: Create a New Virtual Environment
Recreate the virtual environment:
```bash
python3 -m venv venv
```

Activate the new virtual environment:
- On macOS/Linux:
  ```bash
  source venv/bin/activate
  ```
- On Windows:
  ```bash
  venv\Scripts\activate
  ```

### Step 3: Install Packages from `requirements.txt`
With the virtual environment activated, install the packages listed in `requirements.txt`:
```bash
pip install -r requirements.txt
```

This will install the cleaned set of packages in your new virtual environment.
