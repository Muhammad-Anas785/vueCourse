<template>
  <div>
    <!-- Simple slot start -->
    <SlotComp>
      <!-- this content is set in slot component 'slot' -->
      <h1>Content 1</h1>
      <h2>Content</h2>
    </SlotComp>
    <!-- Simple slot end -->
    <hr />

    <!-- fallback / default slot start -->
    <FallbackContentSlot>
      <h2>This is the slot content passing from component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio labore aliquam eligendi
        natus odit odio culpa architecto debitis provident consequuntur eius, tempore vel
        exercitationem nulla sequi magnam. Veritatis, eos.
      </p>
    </FallbackContentSlot>
    <!-- fallback / default slot end -->

    <hr />

    <!-- Named slot start -->
    <NamedSlot>
      <!-- by defining template and use named slot in template with v-slot:slot-name or with shorthand #slot-name -->
      <template v-slot:heading>
        <h1>This is the Named Slot Heading</h1>
      </template>

      <template #paragraph>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem suscipit at amet quos
          maiores nemo quas, in impedit, consequuntur labore aut dolorum, rerum reprehenderit!
          Officia asperiores neque modi rem molestiae harum facilis reprehenderit eligendi, nobis
          animi debitis vitae sapiente cum?
        </p>
      </template>
    </NamedSlot>
    <!-- Named slot end -->

    <hr />

    <DefaultSlot>
      <template #default>
        <h1>This is Default Slot</h1>
      </template>
    </DefaultSlot>

    <hr />
  </div>
</template>
<script setup>
import DefaultSlot from "./DefaultSlot.vue";
import FallbackContentSlot from "./FallbackContentSlot.vue";
import NamedSlot from "./NamedSlot.vue";
import SlotComp from "./SlotComp.vue";
</script>
