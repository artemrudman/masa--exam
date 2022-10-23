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
