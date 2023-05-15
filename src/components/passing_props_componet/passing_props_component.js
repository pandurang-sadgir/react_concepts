// Import get image url function 
import { getImageUrl } from "../../utilities/getImageUrl";
import './passing_props_component.css';

function Avatar({ person, size=50 }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }


  export default function ProfileC() {
    return (
      <div>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi', 
            imageId: 'YfeOqp2'
          }}
        />
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma', 
            imageId: 'OKS67lh'
          }}
        />
        <Avatar
          size={50}
          person={{ 
            name: 'Lin Lanying',
            imageId: '1bX5QH6'
          }}
        />
      </div>
    );
  }
  