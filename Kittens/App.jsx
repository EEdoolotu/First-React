import Contact from "./Contact.jsx" 

export default function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/ginger-cat.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            
            />
            <Contact 
                img="./images/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/omar-ramadan-q5U75AK69-A-unsplash.jpg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/tabby-cat.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        
        </div>
    )
}