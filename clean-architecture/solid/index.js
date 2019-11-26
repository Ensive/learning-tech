class FinancialReport {
  constructor({ reportData }) {
    this.reportData = reportData;
  }

  render() {
    // ...
    //

    //
  }

  markRed() {

  }

  renderToWebPage() {
    // with marked red
    const data = this.markRed(this.reportData);
    this.render(data);
  }

  renderToPrint() {
    // with parenthesis
    const data = addParenthesis(this.reportData);
    this.render(data);
  }
}

class generator {
  generateReport() {
    gateway.getTransactions() + gateway.getHistory() + gateway.getUsers()
  }
}

class gateway {
  getTransactions() {
    datamapper.fromPeriod(2015-30-05);
    datamapper.method();
  }

  getHistory() {}
  getUsers() {}
}

class datamapper {

}


// generator => datamapper

// generator => gateway <= mapper
