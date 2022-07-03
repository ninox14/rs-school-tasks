import './sources.scss';

class Sources {
  private tabBtnsContainer: HTMLElement;
  private tabContentContainer: HTMLElement;
  constructor() {
    this.tabBtnsContainer = document.querySelector<HTMLElement>('.tab-buttons');
    this.tabContentContainer = document.querySelector<HTMLElement>('.source-tabs');
  }
  draw(data: SourceItem[]) {
    // const fragment = document.createDocumentFragment();
    // const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

    // data.forEach((item) => {
    //   const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

    //   sourceClone.querySelector('.source__item-name').textContent = item.name;
    //   sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

    //   fragment.append(sourceClone);
    // });

    const fragments = this.constructFragments(data);
    this.tabBtnsContainer.append(fragments[0]);
    this.tabContentContainer.append(fragments[1]);
  }
  private splitByLetters(data: SourceItem[]) {
    const dataByLetters: SourcesByLettersInterface = {};

    data.map((i) => {
      const firstLetter = i.name.charAt(0);
      if (!dataByLetters[firstLetter]) {
        dataByLetters[firstLetter] = [i];
      } else {
        dataByLetters[firstLetter].push(i);
      }
    });
    return dataByLetters;
  }
  private listener = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    const tabBtnsElems = this.tabBtnsContainer.children as HTMLCollectionOf<HTMLElement>;
    const tabContentElems = this.tabContentContainer.children as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < tabBtnsElems.length; i++) {
      tabBtnsElems[i].classList.remove('active');
    }

    for (let i = 0; i < tabContentElems.length; i++) {
      if (tabContentElems[i].id === target.textContent) {
        tabContentElems[i].style.display = 'flex';
      } else {
        tabContentElems[i].style.display = 'none';
      }
    }

    // this.tabContentContainer.querySelector<HTMLElement>(target.textContent).style.display = 'flex';
    target.classList.add('active');
  };
  private constructFragments(data: SourceItem[]) {
    const dataByLetters = this.splitByLetters(data);
    const tabItemTemplate: HTMLTemplateElement = document.querySelector('#tabItemTemp');
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

    const tabButtonsFragment = document.createDocumentFragment();
    const tabContentFragment = document.createDocumentFragment();

    Object.keys(dataByLetters).forEach((key) => {
      const tabClone = tabItemTemplate.content.cloneNode(true) as HTMLElement;
      const tabItem = tabClone.querySelector<HTMLElement>('.tab__item');
      const currentArray = dataByLetters[key];
      const tabContentElem = this.constructTabContentElem(currentArray, sourceItemTemp, key);

      tabItem.textContent = key;
      tabItem.onclick = this.listener;

      tabContentFragment.append(tabContentElem);
      tabButtonsFragment.append(tabClone);
    });
    return [tabButtonsFragment, tabContentFragment];
  }

  private constructTabContentElem(data: SourceItem[], sourceItemTemp: HTMLTemplateElement, id: string) {
    const tabContentElem = document.createElement('div');
    tabContentElem.id = id;
    tabContentElem.classList.add('source-tabs__tab', 'buttons');
    data.forEach((item) => {
      const sourceItemClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
      sourceItemClone.querySelector('.source__item-name').textContent = item.name;
      sourceItemClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      tabContentElem.append(sourceItemClone);
    });
    return tabContentElem;
  }
}

export default Sources;
