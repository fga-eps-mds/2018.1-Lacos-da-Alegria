export class RoleService {

    getLocalRole() {
        let role = localStorage.getItem("role");

        if (role == null) {
            return null;
        } else {
            return JSON.parse(role);
        }
    }

    setLocalRole(role: string) {
        localStorage.setItem("role", role);
    }

}
