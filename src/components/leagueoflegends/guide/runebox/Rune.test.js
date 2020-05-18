import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import RuneOrder from "./RuneOrder";
import Rune from "./Rune";
import store from '../../../../../_mock_/store.mock';
import vuetify from "../../../../../_mock_/vuetify.mock";

const localVue = createLocalVue()
localVue.use(vuetify)

const factory = (propsData) => mount(RuneOrder, {
    localVue: localVue,
    store,
    propsData,
    sync: false
})

describe('RuneOrder in non-editable state', () => {
    const wrapper = factory({
        width: 200,
        editable: false
    });
    it('renders correctly', () => {
        expect(wrapper.findAllComponents(Rune).length).toBe(8);
    });
});

describe('RuneOrder in editable state', () => {
    const wrapper = factory({
        width: 200,
        editable: true
    });
    it('renders correctly', () => {
        expect(wrapper.findAllComponents(Rune).length).toBe(13);
    });
    it('can be clicked at Rune and change layout',  async () => {
        wrapper.findAllComponents(Rune).at(6).find('#test').trigger("contextmenu");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(Rune).at(6).findAll(".v-image").length).toBe(4);
    })
})