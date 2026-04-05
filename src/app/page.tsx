import Contacts from "./component/contacts/page"
import HomePage from "./component/home/page"
import Projects from "./component/projects/page"
import Services from "./component/services/page"
import Skills from "./component/skills/page"





const AppPage = () => {

  return (
    <section>
      <HomePage />
      <Skills />
      <Services />
      <Projects />
      <Contacts />

    </section>
  )
}

export default AppPage