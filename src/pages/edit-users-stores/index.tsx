import { useParams } from "react-router-dom";
import SaveUsersStoresComponent from "../../components/save-users-stores";

export default function EditUsersStoresPage() {
    const { id } = useParams();

    return <SaveUsersStoresComponent id={id} isEdit={true} />;
}
