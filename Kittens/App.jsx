import Contact from "./Contact.jsx" 

export default function App() {
    const details = [{
        id: "1",
        img: "./images/ginger-cat.jpg",
        name: "Mr. Whiskerson",
        phone: "(212) 555-1234",
        email: "mr.whiskaz@catnap.meow"
    },
    {
        id: "2",
        img: "./images/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg",
        name: "Fluffykins",
        phone: "(212) 555-2345",
        email: "fluff@me.com"

    },
    {
        id: "3",
        img: "./images/omar-ramadan-q5U75AK69-A-unsplash.jpg",
        name: "Felix",
        phone: "(212) 555-4567",
        email: "thecat@hotmail.com"
    },
    {
        id: "4",
        img: "./images/tabby-cat.jpg",
        name: "Pumpkin",
        phone: "(0800) CAT KING",
        email: "pumpkin@scrimba.com"

    }
]
    return (
        <div className="contacts">
            {details.map((detail) => (
                <Contact 
                    key={detail.id}
                    img={detail.img}
                    phone={detail.phone}
                    email={detail.email}
                />
            ))}
        
        </div>
    );
}