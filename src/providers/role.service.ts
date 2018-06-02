export class RoleService {

    getLocalRole() {
        let role = localStorage.getItem("role");

        if (role == null) {
            return null;
        } else {
            return role;
        }
    }

    setLocalRole(role: string) {
        localStorage.setItem("role", role);
    }

    clearRole(){
        localStorage.removeItem("role");
    }

}
