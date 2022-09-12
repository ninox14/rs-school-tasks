type SourceItem = {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
};

type NewsItem = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

interface DataSourcesInterface {
  sources: SourceItem[];
  status: string;
}

interface DataNewsInterface {
  articles?: NewsItem[];
  status: string;
  totalResults?: number;
}

type CallbackType<T> = (data: T) => void;

interface ApiOptionsInterface {
  apiKey: string;
}
interface QueryOptionsInterface {
  endpoint: string;
  options?: OptionsInterface;
}

interface OptionsInterface {
  sources?: string;
}
interface SourcesByLettersInterface {
  [key: string]: SourceItem[];
}

interface CombinedOptionsInterface extends ApiOptionsInterface, QueryOptionsInterface {}
