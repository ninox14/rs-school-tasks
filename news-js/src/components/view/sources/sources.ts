import './sources.css';

class Sources {
  draw(data: SourceItem[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources').append(fragment);
  }
  splitByLetters(data: SourceItem[]) {
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
}

export default Sources;
