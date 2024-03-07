abstract class Department {
    static fiscalYear = 2024;
    // private readonly id: string;
    // private name: string;
    protected employee: string[] = [];

    constructor(protected readonly id: string, private name: string) {
        // this.id = id;
        // this.name = name;
        console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // this.id = 'd2';
        this.employee.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}

class ITDepartment extends Department {
    // admins: string[];
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a value");
        }
        this.addReport(value);
    }

    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }

    addEmployee(name: string) {
        if (name === "Max") {
            return;
        }

        this.employee.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.name = "New Name";
// it.employee[2] = "Anna";

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);

accounting.addReport("Something went wrong...");

console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
