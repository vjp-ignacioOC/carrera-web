<template>
  <div class="entrenamientos">
    <!--
      https://www.runnersworld.com/es/training/a32795205/plan-entrenamiento-maraton-principiantes/ 

      https://as.com/deporteyvida/2019/04/26/portada/1556276205_798313.html#:~:text=Qu%C3%A9%20se%20debe%20comer%20antes%20de%20correr%20una%20marat%C3%B3n&text=mantener%20la%20energ%C3%ADa.-,La%20mejor%20opci%C3%B3n%20es%20tomar%20alimentos%20ricos%20en%20carbohidratos%20y,el%20riesgo%20de%20problema%20estomacales. 

      https://www.asics.com/es/es-es/running-advice/returning-to-training-after-your-marathon/#:~:text=Una%20buena%20forma%20de%20empezar,de%20correr%20sobre%20superficies%20duras. 
    -->

    <div id="list-info" class="list-group">
      <a class="list-group-item list-group-item-action" href="#list-item-1">Entrenamiento</a>
      <a class="list-group-item list-group-item-action" href="#list-item-2">Lesiones</a>
      <a class="list-group-item list-group-item-action" href="#list-item-3">Dieta</a>
      <a class="list-group-item list-group-item-action" href="#list-item-4">Día Después</a>
    </div>
    <div data-spy="scroll" data-target="#list-info" data-offset="0" class="scrollspy-example">
      <h4 id="list-item-1">Entrenamiento básico para principiantes </h4> 
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis corrupti repudiandae aut ipsa, fugiat autem
        exercitationem magni reiciendis non odit, veritatis quas atque ut praesentium odio sint ea ratione id officia
        eaque? Porro harum aut asperiores molestias dolorem itaque dolorum cum, deserunt in. Harum unde tempora,
        voluptatum ad quas explicabo quam recusandae blanditiis facilis hic voluptas dolores fugiat voluptates labore
        nesciunt impedit itaque illum, doloremque nisi dolorum veniam numquam alias maiores eos. Eaque, quod. Nam
        repellat culpa aliquam totam tempora, modi in, commodi, nostrum deserunt ipsam expedita consequuntur ullam
        aliquid dignissimos nobis iste suscipit perferendis sint! Eos earum quo libero.</p>
        <p><a href="#list-info"><i class="fa-solid fa-arrow-up" ></i></a></p>
      <h4 id="list-item-2">Cómo evitar lesiones</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam iusto error unde blanditiis,
        voluptatem soluta! Nihil eveniet, porro reprehenderit reiciendis voluptatum autem accusantium tenetur assumenda!
        Molestiae porro voluptatem quaerat, at sint voluptates non, nostrum animi ex sed cupiditate tenetur laborum
        accusantium, ratione maxime facilis cumque ea delectus incidunt! Deleniti dolorum, dolore eaque quo totam ex ut
        sequi obcaecati hic in quas! Nobis, earum tenetur autem sit hic quibusdam reiciendis temporibus labore fugiat
        debitis dolore veniam totam perferendis repellendus sunt beatae quod eum ratione veritatis dolor, itaque ipsam
        illum? Libero fuga adipisci sed provident at ullam laborum dolores aspernatur quis!</p>
        <p><a href="#list-info"><i class="fa-solid fa-arrow-up" ></i></a></p>
      <h4 id="list-item-3">Qué comer antes de una maratón</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eius sapiente id deserunt perspiciatis alias
        recusandae, expedita magni aliquam consequatur soluta consequuntur quisquam facilis enim voluptate quidem
        magnam. Iste totam debitis accusantium consequatur maxime nihil? Nam doloremque explicabo, nostrum minima
        dolorum corporis corrupti repudiandae eum magnam illo ab nemo ea voluptates quaerat voluptatem labore eligendi
        perspiciatis blanditiis voluptas enim et dicta a id! Deleniti similique officia nulla iure perspiciatis aut
        delectus obcaecati! Atque error, ratione alias nostrum iusto repudiandae! Vitae reprehenderit temporibus
        deserunt consectetur illo, consequatur debitis harum perspiciatis repudiandae quas rem ipsa eius perferendis,
        eos consequuntur. Culpa, consequatur non.</p>
        <p><a href="#list-info"><i class="fa-solid fa-arrow-up" ></i></a></p>
      <h4 id="list-item-4">Qué hacer el día después</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi doloribus natus ut eum quo, doloremque
        veniam ab vel, suscipit accusantium tenetur incidunt consectetur officia cupiditate, facilis a magnam saepe?
        Adipisci distinctio cumque totam velit eum sed aut delectus illum corporis? Eos et at ad quos tenetur ducimus.
        Quod, officiis error. Rerum porro accusantium error sint? Omnis alias veritatis atque nemo maxime culpa, labore
        doloremque odit delectus reiciendis similique. Saepe sapiente, sit eaque quis, facilis, ipsum maxime minima
        laborum accusantium veritatis dolorem. Ullam mollitia fuga magni provident beatae id earum numquam,
        necessitatibus soluta veniam illo dignissimos vitae, vero, nobis eligendi pariatur.</p>
        <p><a href="#list-info"><i class="fa-solid fa-arrow-up" ></i></a></p>

    </div>

  </div>
</template>

<script>
export default {
  computed: {
    search() {
      return this.$route.query.search || "";
    },
  },
  methods: {

  },
};
</script>

<style scoped>


h2 {
  color: green;
}

.entrenamientos {
  min-height: 100vh;
}

#list-info {
  display: flex;
  flex-direction: row;
}
</style>