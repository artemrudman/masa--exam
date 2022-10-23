//16

public static addMonths(date: Date, value: number): Date {
    let expectedMonth: number = date.getMonth() + value;
    if (expectedMonth > 12) {
        expectedMonth = expectedMonth % 12;
    }

    if (expectedMonth < 0) {
        expectedMonth += 12;
    }

    date.setMonth(date.getMonth() + value);
    const daysToAdd: number = date.getMonth() >  expectedMonth ? -1 : 1;
    while (date.getMonth() !== expectedMonth) {
        date.setDate(date.getDate() + daysToAdd);
    }

    return  date;
}








//19


public static padLeft(input: number, places: number): string {
    const zeroes: number = places - input.toString().length + 1;
    return Array(+(zeroes > 0 && zeroes)).join("0") + input.toString();
}

function which input two parameters (input as a number and plases s a number). Finally we get a string.
inside the function we create const zeroes as a number with logic (places - input.toString().length + 1)

Here ==> (input.toString().length) we count length string of number variable input.








//20

interface user {
    id: number;
    firstName: string;
    lastName: string;
}

interface dbUser {
    id: number;
    first_name: string;
    last_name: string;
}

interface role {
    id: number;
    userIds: number[];
}

interface dbRole {
    id: number;
    user_id: number;
}

public isUserPermitted(userId: number, roleId: number): Promise<user> {
    return new Promise<user>((resolve, reject) => {
        Promise.all([
            this.getUser(userId),
            this.getRole(roleId)
        ])
        .then((results: [user | role]) => {
            return results[1].userIds.indexOf(results[0].id) > -1;
            resolve(results[0]);
        });
    });
}

private getUser(userId: number): Promise<user> {
    return new Promise<user>((resolve, reject) => {
        // Access to the DB that returns the user data by id as dbUser or null
    });
}

private getRole(roleId: number): Promise<role> {
    return new Promise<user>((resolve, reject) => {
        // Access to the DB that returns the role data by id as array of dbRole or null
    });
}
