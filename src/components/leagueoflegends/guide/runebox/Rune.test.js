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
    it('shows sub-runes when clicked at',  async () => {
        wrapper.findAllComponents(Rune).at(6).find('#empty-rune-box').trigger("contextmenu");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(Rune).at(6).findAll(".v-image").length).toBe(4);
    });
    it('when clicked at image to select sub-rune, sub-rune title is not empty', async () => {
        wrapper.findAllComponents(Rune).at(6).findAll(".empty-box").at(0).trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAllComponents(Rune).at(6).findAll(".v-image").length).toBe(1);
    });
    it('when clicked at image to select sub-rune, sub-rune title is not empty', async () => {
        let runes = wrapper.findAllComponents(Rune);
        for(let i = 0; i < runes.length; i++) {
            if(wrapper.findAllComponents(Rune).at(i).props("title") === "Domination")
            {
                wrapper.findAllComponents(Rune).at(i).find("#top-rune").trigger("contextmenu");
                await wrapper.vm.$nextTick();
                break;
            }
        }
        expect(wrapper.findAllComponents(Rune).at(6).vm.getColor).toBe("grey");
    });
})