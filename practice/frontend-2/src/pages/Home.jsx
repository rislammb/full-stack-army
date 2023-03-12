import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

const experiences = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            at illum eius nostrum beatae ipsum, numquam sapiente vitae
            consequatur dolorum quidem vero ab veniam ex tempore ut quisquam
            ipsam id?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nihil accusantium dignissimos aliquam atque, libero dolorum quasi
            repellendus, eligendi quibusdam qui est sunt iste doloremque esse
            obcaecati quod voluptatum dolore.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aperiam fugiat similique qui aut cumque iure animi dolorem eius nam?
            Nisi vero nihil nam doloremque natus quaerat, cupiditate iure dolor!`,
];
const educations = [
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dolorem aperiam hic facilis praesentium quos dolor, eveniet eligendi
            soluta, fuga voluptatem voluptatum recusandae. Magnam reprehenderit
            veniam quia in sapiente dolores.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            itaque adipisci molestias excepturi incidunt dolore ex asperiores
            est! Alias, facere quo? Veritatis possimus, officiis doloremque quam
            voluptates dolor reiciendis soluta.`,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus, nemo eius atque in consequatur temporibus quae
            adipisci, nesciunt placeat error debitis deserunt optio.
            Exercitationem, numquam? Eaque, libero!`,
  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            dolorem aperiam hic facilis praesentium quos dolor, eveniet eligendi
            soluta, fuga voluptatem voluptatum recusandae. Magnam reprehenderit
            veniam quia in sapiente dolores.`,
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            itaque adipisci molestias excepturi incidunt dolore ex asperiores
            est! Alias, facere quo? Veritatis possimus, officiis doloremque quam
            voluptates dolor reiciendis soluta.`,
];

function Home() {
  return (
    <Layout>
      <Section title={'Experiences'} items={experiences} />
      <Section title={'Educations'} items={educations} />
    </Layout>
  );
}

export default Home;
