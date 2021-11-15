<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import Modal from '@/components/modal2.vue';
import ProductDetail from './product-detail.vue';
import ProductList from './product-list.vue';

const captains = console;

export default {
  name: 'Products',
  data() {
    return {
      productToDelete: null,
      message: '',
      routePath: '/products',
      selected: null,
      showModal: false,
      title: 'Products',
    };
  },
  components: {
    ListHeader,
    ProductList,
    ProductDetail,
    Modal,
  },
  created() {
    this.getProductsAction();
  },
  computed: {
    ...mapGetters('products', { products: 'products' }),
  },
  methods: {
    ...mapActions('products', [
      'getProductsAction',
      'deleteProductAction',
      'addProductAction',
      'updateProductAction',
    ]),
    askToDelete(product) {
      this.productToDelete = product;
      this.showModal = true;
      if (this.productToDelete.name) {
        this.message = `Would you like to delete ${this.productToDelete.name}?`;
        captains.log(this.message);
      }
    },
    clear() {
      this.selected = null;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteProduct() {
      this.closeModal();
      if (this.productToDelete) {
        captains.log(
          `You said you want to delete ${this.productToDelete.name}`
        );
        this.deleteProductAction(this.productToDelete);
      }
      this.clear();
    },
    enableAddMode() {
      this.selected = {};
    },
    getProducts() {
      this.getProductsAction();
      this.clear();
    },
    save(product) {
      captains.log('product changed', product);
      if (product.id) {
        this.updateProductAction(product);
      } else {
        this.addProductAction(product);
      }
    },
    select(product) {
      this.selected = product;
    },
  },
};
</script>

<template>
  <div class="flex-1 content-container">
    <ListHeader
      class="mx-4 mt-4"
      :title="title"
      @refresh="getProducts"
      @add="enableAddMode"
      :routePath="routePath"
    />

    <div class="grid grid-cols-12 gap-4 mx-4 mt-4">
      <div class="col-span-8" v-if="products">
        <ProductList
          v-if="!selected"
          :products="products"
          @selected="select($event)"
          @deleted="askToDelete($event)"
        />

        <ProductDetail v-if="selected" :product="selected" @unselect="clear" @save="save" />
      </div>
    </div>

    <Modal
      class="hidden modal-product"
      :message="message"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteProduct"
    />
  </div>
</template>
