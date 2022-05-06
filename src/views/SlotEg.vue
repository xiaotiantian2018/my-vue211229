<template>
  <div class="slot_eg">
    <SubmitButton> save</SubmitButton>
    <BaseLayout>
      <template v-slot:header> this is a header </template>
      <template v-slot:default>
        <p>this is a main:</p>
        <p>A paragraph for the main content.</p>
        <p>
          And another one.任何没有被包裹在带有 v-slot 的 template
          中的内容都会被视为默认插槽的内容。
        </p>
      </template>
      <template v-slot:footer> this is a footer:
        <br/>
        <input type="text" value="" v-model="inputedText">
        {{inputedText}}
        <br/>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br/>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="one">Two</label>
        <br/>
        <span>Picked: {{ picked }}</span>
      </template>
    </BaseLayout>
  </div>
</template>
<script>
import SubmitButton from "@/components/SubmitButton.vue";
import BaseLayout from "@/components/BaseLayout.vue";
export default {
  name: "SlotEg",
  components: {
    SubmitButton,
    BaseLayout,
  },
  data() {
    return {
      picked:'',
      inputedText:''

    };
  },
};
</script>

