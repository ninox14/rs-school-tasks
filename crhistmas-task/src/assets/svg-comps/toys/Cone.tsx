import * as React from "react";
import { SVGProps } from "react";

const SvgCone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path
      fill="#fff"
      d="M30 .563c-.086.103-.208.188-.273.188-.239 0-1.125.818-1.382 1.276-.146.26-.312.474-.368.474s-.102.101-.102.225a.587.587 0 0 1-.139.364c-.402.402-.12 3.111.387 3.723.1.121.056.179-.18.238a.805.805 0 0 0-.454.344c-.108.2-.167.226-.243.103-.075-.121-.226-.044-.593.304-.641.607-.959 2.271-1.086 5.679-.033.892-.104 1.356-.229 1.5-.1.115-.157.274-.128.353s-.006.181-.079.226c-.072.045-.131-.011-.131-.124 0-.141-.183-.031-.578.348l-.578.554.217.332c.196.299.198.332.015.332-.111 0-.202.056-.202.125 0 .12.146.16.344.094.052-.017.101-.172.109-.344.033-.657.051-.722.203-.716.435.016.719-.046.719-.159 0-.069-.099-.129-.219-.134s.005-.091.277-.19c.273-.1.573-.152.668-.116.1.038.198-.034.234-.171s.214-.268.426-.31c.287-.057.364-.14.364-.389 0-.368.696-.476.83-.128.04.103.178.187.309.188s.237.056.237.125.059.125.132.125.106-.042.074-.094.105-.087.305-.078c.581.025.609.037.533.234-.04.103-.016.188.052.188s.153-.113.189-.25c.074-.281.569-.344.811-.103.113.113.135.085.096-.119-.033-.173.022-.287.159-.325.873-.242.85-.24.613-.059-.194.149-.12.17.594.169.5-.001.816-.053.816-.136 0-.074-.121-.13-.269-.125-.345.013-.444-.258-.131-.357.329-.104.648.038.566.253-.04.105.009.177.121.177.128 0 .168.081.124.251a.554.554 0 0 0 .089.438c.157.188.999.267.999.093 0-.052.202-.099.449-.105.325-.008.394.02.25.1-.347.194-.216.336.289.316.42-.017.459-.041.281-.177-.185-.141-.175-.158.089-.161.236-.003.282-.056.229-.261-.043-.165-.015-.238.079-.205.081.029.132.229.115.445-.033.414.138.534.27.19.066-.173.126-.154.405.125.18.18.373.328.428.328.179 0 .247-.227.085-.284-.086-.03-.002-.056.187-.058s.344.05.344.114-.07.081-.156.038-.047.009.086.118c.22.178.183.257-.098.208-.058-.01-.08.053-.049.141s.162.15.291.138c.129-.012.277.044.328.125.062.098.094.074.096-.072.002-.258-.015-.255.48-.082.387.135.389.14.2.506-.105.203-.157.48-.114.614.044.138.019.244-.056.244-.073 0-.133-.108-.133-.241s-.082-.323-.181-.423-.147-.216-.104-.259c.106-.107-.1-.082-.402.047-.233.1-.234.108-.016.116.194.007.207.041.078.196-.208.251-.454.237-.557-.031-.097-.254-.056-.361.116-.303.067.022.016-.076-.113-.219-.284-.314-.546-.349-.307-.041.159.205.154.206-.078.016-.269-.22-.581-.185-.49.054.037.096-.099.151-.383.158-.385.008-.432-.023-.375-.25.065-.259.064-.259-.072.003-.095.182-.223.245-.421.207-.209-.04-.303.015-.353.207-.079.301.245.366.527.105.137-.127.154-.116.092.061-.042.119-.036.206.013.192.172-.048.658.292.585.409-.041.065-.017.119.051.119s.16-.056.202-.125c.142-.23.26-.128.255.219-.003.215.055.331.155.311.236-.048 1.403.355 1.403.485 0 .061-.056.111-.125.111s-.125.06-.125.133.052.1.116.06c.064-.04.157-.006.207.075.062.1.011.126-.161.081-.138-.036-.352-.01-.474.059s-.19.072-.151.009-.036-.183-.168-.265c-.209-.13-.25-.109-.318.163-.111.441-.34.388-.726-.17-.272-.392-.392-.471-.648-.422-.214.041-.411-.03-.616-.223-.257-.241-.388-.272-.877-.205-.549.075-.572.066-.506-.201.038-.154.037-.21-.002-.124s-.127.156-.194.156-.096-.042-.064-.094-.077-.094-.243-.094-.3.07-.3.156-.042.155-.094.154c-.144-.003-.429-.204-.417-.293.043-.32-.009-.459-.146-.39-.086.044-.048-.009.085-.116s.211-.226.174-.262c-.097-.097-.477.07-.477.21 0 .065-.052.087-.116.047-.215-.133-.286.197-.075.351.189.138.185.152-.044.152-.139 0-.229-.023-.2-.052.076-.076-.515-.519-.693-.519-.102 0-.128-.122-.079-.368.074-.37-.235-.634-.529-.453-.201.124-.007.559.218.489.214-.066.005.133-.544.518-.249.175-.248.175.01.182.422.011.314.544-.114.563-.408.018-.422-.029-.053-.177.226-.091.237-.115.055-.121-.124-.004-.191-.064-.149-.133s.004-.127-.086-.129c-.109-.003-.097-.043.038-.122.287-.168.161-.749-.163-.749-.187 0-.225-.058-.165-.249s.033-.232-.116-.174c-.107.041-.166.121-.131.178s-.007.144-.095.195c-.087.05-.119.047-.07-.006s.001-.184-.105-.29c-.155-.155-.213-.161-.294-.029-.055.09-.184.132-.286.093s-.234-.024-.294.034c-.06.058-.181.025-.27-.072-.093-.103-.107-.177-.031-.177.072 0 .13-.056.13-.125 0-.238-.442-.124-.797.206-.197.182-.507.337-.689.344-.244.009-.385.121-.534.423-.191.387-.189.406.019.34.13-.041.25.004.291.11.056.147-.003.159-.328.066-.498-.143-.494-.143-.387.03.05.081.035.111-.034.068-.071-.044-.123.082-.123.293 0 .203.047.369.104.369s.101.127.096.281c-.008.279-.009.279-.115.017-.141-.349-.457-.458-.793-.272-.15.083-.346.136-.437.117-.133-.027-.135.021-.01.255.094.176.175.227.206.132.067-.202.236-.202.251 0 .007.086.048.297.093.469.076.295.07.299-.108.081-.177-.217-.214-.219-.591-.031-.221.11-.478.201-.57.201-.097 0-.168.135-.168.32 0 .181-.054.286-.125.243-.069-.042-.125-.193-.125-.335 0-.222-.028-.235-.199-.093-.181.15-.179.18.024.328.122.09.17.165.105.168s.038.09.229.193c.191.103.416.147.5.096.101-.061.096-.021-.016.117-.129.159-.226.178-.406.082-.185-.099-.237-.084-.237.065 0 .106.08.192.177.192s.201.07.23.156c.077.23-.041.594-.192.594-.072 0-.094-.037-.049-.083.122-.122-.443-.379-.697-.317-.12.03-.219.103-.219.164s-.098.109-.219.108c-.173-.002-.183-.025-.046-.111.096-.061.131-.177.078-.261-.073-.117-.118-.113-.199.017-.058.093-.172.17-.255.17s-.174.07-.202.156c-.03.089.02.13.115.095.331-.122.541.139.385.481-.162.355-.842.3-.845-.068a.74.74 0 0 0-.131-.366c-.286-.384-.601-1.106-.518-1.189.049-.049.088.005.088.12 0 .125.1.208.25.208.138 0 .25-.056.25-.125s-.084-.125-.188-.125c-.216 0-.25-.197-.054-.318.191-.118.495.336.411.614-.049.161-.018.215.099.175.18-.062.201-.391.048-.752-.066-.156-.035-.219.108-.219.124 0 .202-.108.205-.281.004-.274.009-.275.188-.039.173.229.275.056.152-.261-.101-.261-.844-.117-.844.163 0 .161-.056.293-.125.293s-.125-.055-.125-.121-.084-.089-.188-.049c-.103.04-.188.011-.188-.063s-.077-.105-.172-.069c-.219.084-.595.911-.563 1.239.048.492-.019.688-.234.691-.207.003-.207.011.003.133.246.143.179.363-.111.363-.108 0-.15-.06-.1-.141s.023-.12-.065-.091c-.083.028-.151.105-.151.172s-.081.212-.18.321-.209.475-.243.813c-.034.337-.094.714-.133.838s-.003.306.079.406c.099.119.105.182.017.182-.074 0-.191-.098-.261-.219-.121-.207-.128-.207-.131.004-.002.123.104.263.236.313.207.077.217.121.076.313-.156.213-.175.213-.382.006s-.213-.203-.121.088c.084.264.071.284-.093.148-.321-.266-.483.845-.224 1.528.094.248.069.416-.11.735-.372.663-.44 1.173-.202 1.536.189.288.19.342.011.616-.108.165-.196.498-.196.741 0 .429-.172.602-.285.286-.03-.086-.117.063-.193.332-.158.56-.105.723.2.607.196-.074.195-.061-.009.144-.209.211-.21.236-.013.38.161.118.187.24.111.517-.165.598.065 1.676.358 1.676.131 0 .057.441-.238 1.411-.247.814-.104 1.837.334 2.394.122.155.192.392.155.53-.041.159.058.396.275.653l.34.404-.208 1.061c-.241 1.226-.148 1.82.359 2.297.173.162.314.389.314.504 0 .298.351.961.549 1.037.13.05.154.33.106 1.247-.07 1.338.372 2.564 1.293 3.583.235.26.428.554.428.652s.066.245.147.325c.112.112.112.222 0 .468-.424.93.005 2.231.917 2.782.66.398.881.805 1.063 1.953.211 1.33.813 2.2 1.522 2.2.24 0 .601.653.601 1.086 0 .62.747 1.432 1.816 1.973.389.197.742.446.783.553.155.404 1.273 1.263 2.2 1.692s2.561.355 3.052-.136c.093-.093.23-.133.304-.087.08.049.098.024.045-.062-.053-.085.005-.175.137-.217 1.29-.411 2.681-1.663 3.079-2.771.172-.478.352-.716.736-.97.921-.61 1.081-.862 1.493-2.358.155-.56.573-1.149.778-1.093.428.116 1.453-1.769 1.453-2.671 0-.866.328-1.602 1.044-2.342.703-.726.931-1.454.947-3.027.008-.742.064-1.152.167-1.217.085-.054.106-.099.047-.1s.095-.227.344-.502c.433-.48.452-.539.452-1.422 0-.667.052-.965.188-1.077s.188-.411.188-1.085c0-.853.032-.969.389-1.414.415-.516.628-1.487.391-1.781-.276-.342-.3-.943-.059-1.47.134-.293.25-.853.265-1.289.022-.614.102-.882.395-1.325.202-.305.374-.615.381-.69a1.964 1.964 0 0 0-.21-1.045c-.097-.187-.178-.546-.178-.798s-.071-.487-.157-.521c-.125-.05-.125-.065 0-.073.245-.015.185-.747-.09-1.096-.245-.312-.245-.316.002-.799.319-.625.465-1.911.247-2.174-.087-.105-.113-.19-.058-.19s-.037-.145-.203-.323c-.243-.259-.305-.463-.314-1.031-.012-.779-.108-1.252-.289-1.433-.065-.065-.085-.205-.044-.311.045-.118.022-.161-.059-.111-.076.047-.168-.057-.214-.241-.058-.23-.139-.301-.281-.246-.167.064-.174.045-.042-.114.122-.147.124-.231.01-.368-.091-.11-.116-.346-.066-.613.065-.345.028-.489-.18-.697-.144-.144-.262-.34-.262-.436s-.088-.208-.196-.249c-.107-.041-.163-.128-.123-.192s.02-.15-.044-.189c-.064-.04-.239-.325-.388-.634-.242-.5-.625-.768-.625-.437 0 .069.056.125.125.125s.125.062.125.138-.084.106-.188.066c-.114-.044-.188 0-.188.112 0 .101-.056.183-.125.183-.146 0-.167-.291-.031-.427.051-.052.096-.234.1-.406.005-.267-.015-.284-.139-.115-.182.249-.305.253-.305.01 0-.222-.06-.231-.385-.057-.189.101-.26.087-.318-.063-.087-.227-.38-.257-.451-.045-.027.082-.142.111-.258.067-.121-.046-.179-.159-.138-.266.06-.157.022-.163-.248-.036-.176.082-.343.234-.371.337-.039.141-.055.134-.066-.031-.009-.135-.116-.219-.278-.219-.189 0-.242-.056-.188-.198.042-.109.076-.22.076-.247s.144.006.321.073c.418.159.429.157.429-.079 0-.111-.141-.312-.314-.448s-.284-.295-.248-.353c.036-.059.008-.142-.061-.185-.266-.164-.112-.302.186-.166.172.078.313.19.313.247s.084.105.188.105c.103 0 .188.056.188.125s.113.125.252.125c.21 0 .24.058.179.344-.065.302-.053.319.095.139.155-.189.191-.186.459.031.16.129.339.205.399.169s.176.042.259.176c.083.133.23.212.327.175.194-.074-1.16-1.395-1.438-1.403-.086-.003-.156-.061-.156-.13s-.054-.125-.119-.125c-.066 0-.255-.127-.421-.281l-.599-.553c-.164-.149-.494-.473-.735-.718s-.508-.447-.594-.447a.16.16 0 0 1-.156-.161c0-.302-.696-.617-.879-.398-.17.204-.279.159-.322-.133-.016-.107.073-.184.212-.184.298 0 .297-.104-.002-.494a.85.85 0 0 1-.172-.697c.035-.215-.028-.745-.139-1.179-.21-.818-.362-1.761-.355-2.193.014-.825-.383-2.431-.667-2.698-.166-.156-.302-.242-.302-.191s-.177-.033-.393-.187c-.269-.192-.581-.282-.988-.287l-.595-.007.269-.378c.148-.208.262-.406.253-.441s.041-.203.111-.375.123-.412.118-.534.048-.186.12-.141c.088.054.091.005.009-.154-.066-.128-.1-.459-.075-.734.076-.841-1.066-2.803-1.638-2.815-.07-.001-.269-.113-.441-.247-.401-.314-1.88-.357-2.125-.062zm1.813.74c1.08.52 1.569 1.342 1.603 2.697.03 1.219-.965 2.525-1.821 2.39-.052-.008-.094.075-.094.184 0 .162.091.183.495.115.272-.046.549-.051.613-.011.186.115.017.565-.184.488-.105-.04-.175.013-.175.134 0 .11-.055.201-.121.201s-.089.084-.049.188c.048.125-.005.187-.16.186-.129-.001-.177-.043-.107-.094.127-.094.172-.503.061-.557-.12-.059-.62.365-.533.452.049.049-.002.054-.114.011s-.24-.2-.286-.35c-.055-.181-.106-.217-.151-.107-.05.122-.113.101-.241-.082-.112-.16-.262-.224-.424-.182-.325.085-.325.287-.001.287.138 0 .25.056.25.125 0 .143-.141.159-.427.049-.118-.045-.198-.223-.198-.442 0-.329-.026-.352-.253-.231-.286.153-.497.07-.497-.196 0-.099-.063-.18-.14-.18-.078 0-.111-.11-.074-.25.036-.138.017-.22-.042-.184-.373.23-.567-2.228-.237-3.01.395-.939 1.593-1.859 2.493-1.916.103-.007.469.123.813.289zM33.5 7.09c0 .449-.007.456-.188.198-.103-.147-.153-.357-.111-.465.136-.354.299-.208.299.268zm-4.327.336c.041.165.11.404.153.531.047.142-.047.086-.245-.145-.359-.418-.421-.688-.157-.688.096 0 .208.135.249.301zm-.473.665c-.1.1-.152.032-.259-.341l-.09-.313.212.289c.116.159.178.323.137.364zm4 .585c-.103.247-.247.449-.319.449-.182 0-.169-.061.138-.661.315-.614.456-.447.181.212zm-4.328.543c.005.303-.224.152-.36-.237-.075-.216-.136-.427-.134-.469.005-.144.492.551.494.706zm.665 1.346c.186.38.337.731.334.781-.007.157-.496-.491-.496-.658 0-.087-.084-.228-.188-.314s-.188-.233-.188-.328c0-.353.208-.152.537.518zm3.49.208c-.191.191-.307.074-.201-.201.058-.152.121-.175.215-.081s.09.177-.015.281zm.675.696c-.036.12-.102.373-.147.562-.096.4-.371.456-.466.094-.042-.161-.004-.25.108-.25.095 0 .209-.141.252-.313s.133-.313.198-.313.091.098.055.219zm-1.542.345c.203.28.204.299.011.225-.137-.053-.182-.033-.127.056.047.076-.085.053-.292-.05s-.373-.254-.367-.335c.007-.103.029-.1.073.009.088.218.292.196.292-.031 0-.272.155-.224.41.127zM28.168 12c.122.206.182.44.133.518-.079.128-.531-.534-.546-.8-.012-.216.206-.067.413.282zm5.582 2.521c0 .057.084.104.187.104s.187.098.186.219c-.002.187-.02.191-.123.031-.108-.167-.123-.167-.133 0s-.02.167-.085 0a.883.883 0 0 0-.257-.323c-.159-.117-.156-.136.02-.136.112 0 .204.047.204.104zm-7.137.362c-.242.15-.301.032-.104-.206.121-.145.184-.16.221-.051.028.084-.024.2-.117.257zm.602-.138c-.08.305.142.484.297.24.128-.203.088-.389-.098-.451-.073-.024-.163.071-.199.211zm4.66 1.443c0 .103.056.188.125.188s.125-.084.125-.188c0-.103-.056-.188-.125-.188s-.125.084-.125.188zm2.332.119c-.052.135.003.193.182.193.143 0 .235-.066.207-.148-.077-.231-.308-.258-.389-.044zm-1.27.069c-.042.068-.003.127.087.132s.037.059-.118.121-.281.182-.281.267c0 .114.037.117.14.014.077-.077.21-.113.296-.08s.184-.014.219-.104c.079-.206-.235-.524-.344-.349zm-4.249.124c-.043.069-.008.125.076.125s.12.033.079.074-.198.035-.35-.014c-.216-.069-.238-.111-.103-.197.233-.148.392-.142.298.012zm-5.282.218c-.086.029-.161.175-.166.324s-.038.201-.073.115c-.077-.191-.292-.207-.292-.022 0 .074-.094.228-.21.344-.196.197-.196.212 0 .25.256.049.28.272.03.272a.352.352 0 0 0-.27.145c-.061.099-.005.123.18.074.237-.062.27-.019.27.351 0 .324.044.405.188.35.12-.046.188.003.188.136 0 .115.056.173.125.131.214-.132.155-.817-.063-.733-.103.04-.188.006-.188-.075 0-.087.14-.131.344-.107.32.037.344.009.348-.429.002-.258-.036-.469-.086-.469s-.108-.16-.129-.355c-.024-.218-.099-.335-.195-.302zm1.196.376c-.023.197.04.406.146.489.153.119.104.16-.28.233-.256.048-.436.135-.4.194s.219.051.405-.017l.523-.189c.159-.057.16-.08.004-.177-.181-.112.245-.625.519-.625.058 0 .106-.052.106-.116 0-.07-.15-.073-.375-.009s-.375.061-.375-.009c0-.28-.237-.083-.273.227zm2.645.077c-.17.163-.334.275-.362.25-.073-.065.401-.529.55-.538.067-.004-.017.126-.188.289zm.69.079c-.042.069-.158.125-.257.125s-.18-.056-.18-.125.116-.125.257-.125.223.056.18.125zm-4.51.201a.309.309 0 0 1 .188.281c-.006.13-.033.148-.073.049-.035-.086-.143-.156-.24-.156s-.177-.056-.177-.125c0-.146.035-.151.302-.049zm4.129.038c.039.063.004.137-.077.164-.241.08.011.347.327.347.338 0 .975.302.867.411-.041.041.171.047.471.014.626-.069 1.042.148.915.477-.109.285-.456.337-.684.103-.103-.106-.272-.201-.375-.21s-.279-.055-.39-.101c-.142-.059-.23.002-.295.205-.085.265-.097.268-.155.047a.391.391 0 0 1 .162-.406c.211-.154.207-.165-.056-.165-.181 0-.249-.052-.192-.144.053-.087.035-.111-.047-.06-.075.046-.116.192-.091.323.034.179-.014.227-.195.192-.16-.031-.244.025-.249.165-.005.147-.044.122-.126-.083-.068-.169-.189-.267-.285-.23a.44.44 0 0 1-.343-.047c-.141-.089-.13-.112.052-.113.302-.003.226-.421-.088-.481-.144-.028-.2.007-.148.092.048.078-.003.137-.119.137-.128 0-.187-.081-.159-.219.035-.171.149-.21.525-.18.393.032.467.003.406-.156-.081-.21.225-.281.348-.081zm-5.913.267c-.474.254-1.018.733-1.018.895 0 .166.389-.08 1.003-.636.621-.561.622-.586.015-.259zm9.883.454c-.132.053-.132.102 0 .271.144.184.138.188-.057.035-.12-.094-.219-.221-.219-.281s.098-.105.219-.1c.139.006.16.033.057.075zM25 18.499c0 .099-.367.442-.385.36-.094-.422-.049-.569.158-.514.125.033.228.102.228.155zm7.123.025c.001-.09.064-.125.14-.078.096.059.087.118-.031.193-.148.094-.074.157.153.133.04-.004.073.073.073.173s-.026.18-.058.18c-.109 0-.525-.537-.523-.675.001-.075.056-.053.123.05.088.136.122.143.123.024zm1.377-.009c0-.077.056-.14.125-.14s.111.07.094.156c-.02.099.084.143.281.119.246-.029.273-.01.125.091a.539.539 0 0 1-.406.06c-.176-.055-.223.013-.239.347l-.02.415-.05-.406c-.04-.325-.105-.403-.324-.392-.211.011-.224.027-.055.072.267.07.291.289.031.289a.188.188 0 0 0-.188.188c0 .227.204.249.292.031.038-.093.067-.068.073.063.005.12-.075.219-.178.219s-.188.091-.188.202c0 .142.083.186.281.148.223-.043.285.006.299.235.022.358-.447.411-.539.061-.033-.126-.224-.325-.425-.444l-.365-.216.312-.289c.172-.159.312-.334.312-.389 0-.229.439-.526.594-.403.106.085.156.079.156-.016zm1.292.098c-.057.043-.146.129-.198.191s-.094-.007-.094-.154c0-.192.055-.246.198-.191.109.042.151.111.094.154zm-8.365.213c.109.042.198.156.198.254 0 .129-.06.148-.219.066-.12-.062-.289-.087-.375-.056-.165.059-.214-.115-.073-.256.103-.103.215-.105.469-.007zm5.339.665c-.043.211-.081.251-.11.115-.024-.113-.154-.235-.288-.27-.324-.085-.308-.27.038-.426.332-.15.465.064.36.58zm-.829-.241c-.037.059.059.196.213.304s.221.196.149.196c-.186 0-.694-.564-.596-.662.112-.112.316.029.234.162zm5.396.083c-.097.097-.454-.114-.384-.227.044-.07.145-.058.252.031.099.082.158.17.132.197zm3.013.019c.03.091-.027.119-.148.073-.109-.042-.198-.131-.198-.198 0-.164.284-.061.346.125zm-10.304.345c-.043.111.011.178.142.178s.194.081.169.212c-.048.249-.744.302-.823.062-.031-.093.025-.121.148-.074.109.042.198.02.198-.049s-.084-.157-.188-.197c-.103-.04-.188-.161-.188-.271s.056-.164.125-.122c.069.043.125.011.125-.07 0-.113.043-.112.18.002.099.082.149.23.112.328zm-2.696-.095c.03.091-.027.119-.148.073-.109-.042-.198-.131-.198-.198 0-.164.284-.061.346.125zm11.453-.029c.047.122.019.179-.072.148-.187-.062-.29-.346-.125-.346.067 0 .156.089.198.198zm-2.341.115c0 .105-.111.188-.253.188-.219 0-.05-.259.243-.371a.749.749 0 0 1 .011.183zm3.872.125c-.039.103-.016.188.053.188s.152-.07.186-.156c.096-.248.956-.25.908-.002-.021.11-.111.215-.198.232s-.102.003-.031-.031c.158-.078.169-.293.015-.293-.139 0-.395.7-.294.802.04.04.134.072.209.071s.051-.056-.052-.123c-.113-.073-.128-.122-.039-.123.082-.001.178.044.213.101.111.179-.071.647-.251.647-.095 0-.173.08-.173.179s-.085.264-.19.368c-.104.104-.182.235-.173.29.068.403-.06.238-.263-.337-.265-.753-.314-1.061-.115-.719.155.266.49.29.49.035 0-.118.072-.156.203-.106.181.069.179.041-.014-.254-.202-.309-.458-.452-.424-.238.04.253-.028.413-.145.341-.072-.044-.092-.202-.044-.35.071-.224.055-.244-.093-.121-.144.12-.179.103-.179-.086 0-.129.044-.207.098-.173s.098-.027.098-.134.062-.195.138-.195c.076 0 .106.084.066.188zm-8.205.196c0 .059-.084.075-.188.036s-.187-.024-.186.035c.001.135.592.415.789.374.081-.017.019.026-.138.095-.162.072-.257.198-.22.294.036.093.011.135-.055.095s-.241.065-.389.235c-.266.306-.844.224-.649-.093.041-.065.145-.021.232.098.199.273.477-.132.354-.514-.056-.174-.045-.187.049-.055.068.095.185.134.262.086.216-.134.163-.321-.09-.321-.323 0-.407-.121-.265-.387.118-.221.494-.205.494.021zm-.625.455c0 .034-.087.029-.192-.012-.117-.045-.178-.012-.157.084.043.187-.444.839-.627.839-.07 0-.151.042-.18.094s-.033.017-.009-.076c.026-.1-.026-.144-.125-.106-.093.035-.168-.012-.168-.106s.043-.143.096-.111c.053.032.128.007.167-.056s.198-.087.352-.054c.226.05.244.035.094-.072-.162-.116-.158-.134.031-.136.361-.003.246-.251-.125-.268-.304-.015-.293-.026.094-.1.425-.081.75-.046.75.081zm3.822-.034c.112.112.132.209.054.257-.069.043-.126.023-.126-.043s-.127-.088-.281-.048c-.251.065-.263.05-.11-.137.209-.255.237-.256.463-.03zm7.424.749c-.002.074-.061.035-.131-.085s-.209-.219-.309-.219a.184.184 0 0 1-.181-.187c0-.143.073-.123.313.085.172.149.311.332.309.405zm-8.559-.428c-.091.146-.562.169-.562.026 0-.054.144-.11.319-.124.185-.015.287.026.243.098zm5.063-.014c0 .061-.084.144-.188.183-.191.073-.256-.06-.104-.212.119-.119.292-.103.292.028zm-5.819.174c-.034.088-.215.17-.402.182l-.341.022.375-.172c.206-.095.387-.177.402-.182s0 .062-.034.15zm-6.646.314c-.118.075-.115.169.016.421.113.218.128.381.047.495-.093.131-.105.12-.052-.048.045-.141.005-.219-.113-.219-.121 0-.183-.129-.183-.375 0-.275.059-.375.219-.373.151.001.172.032.067.099zm3.066.367c-.048.245-.233.315-.459.172-.106-.067-.138-.206-.085-.373.103-.323.609-.136.544.201zm2.196-.16a.474.474 0 0 1-.239.24c-.14.053-.146.008-.035-.236.142-.311.393-.315.274-.003zm9.487-.05c-.04.152-.137.23-.238.191-.174-.067-.219.055-.175.472.021.199-.002.208-.157.064-.228-.213-.065-.624.325-.818.15-.075.282-.143.293-.151s-.011.1-.048.242zm-8.589.045c.133.098.202.218.152.268s-.168.027-.261-.051c-.094-.078-.208-.105-.253-.059s-.082-.012-.082-.126c0-.255.126-.264.445-.031zm9.555.073c0 .137-.05.25-.112.25-.141 0-.272-.325-.171-.425.15-.151.283-.069.283.175zm-14.531.094c.029.086-.012.156-.091.156s-.102-.066-.052-.146c.061-.098.023-.12-.114-.068-.112.043-.233.032-.267-.024s.057-.096.204-.088c.147.008.291.084.32.17zm-4.102.376c-.35.245-.594.025-.299-.269.163-.163.247-.177.386-.062.15.124.136.175-.086.331zm1.258-.338c0 .073.063.093.141.045.101-.063.105-.024.014.14-.198.354-.625.332-.556-.027.054-.284.401-.42.401-.158zm-2.917.076c-.144.144-.091.292.104.292a.188.188 0 0 0 .188-.188c0-.195-.148-.248-.292-.104zm11.667.301c0 .041-.084.074-.188.074s-.16-.028-.126-.061-.008-.146-.094-.249c-.137-.166-.122-.167.126-.013.155.096.281.209.281.249zm-3.937.115c-.064.201-.035.234.148.171.197-.068.194-.053-.022.115-.137.106-.294.165-.349.131s-.169-.006-.252.063c-.103.086-.223.073-.378-.041-.257-.188.141-.421.423-.246.075.046.165-.033.203-.179.038-.145.122-.263.188-.263s.083.112.04.249zm12.312-.197c0 .029.038.151.084.271.06.158.039.191-.077.119a.18.18 0 0 0-.256.055c-.059.095-.095.03-.095-.172 0-.193.07-.326.172-.326.095 0 .172.023.172.052zm-16.397.417c-.021.28-.086.344-.352.344-.313 0-.319-.013-.154-.344.094-.189.253-.344.352-.344.12 0 .172.116.154.344zm13.647-.008c0 .246-.301.137-.353-.128-.028-.145.019-.185.156-.133.108.041.197.158.197.26zm-17.39.048c-.174.108-.36.041-.36-.13 0-.058.117-.075.261-.038.19.05.217.095.1.168zm20.89.179c0 .172-.056.313-.125.313-.14 0-.171-.412-.042-.542.138-.138.167-.098.167.229zm1.75-.064c0 .06-.118.147-.263.193-.247.078-.239.097.125.319.213.13.388.316.388.415s.034.268.076.377c.042.109.014.198-.062.198s-.138-.084-.138-.188c0-.125-.125-.188-.375-.188-.206 0-.375.056-.375.125s-.059.125-.132.125-.101-.052-.062-.114c.039-.063.001-.138-.085-.166-.124-.041-.124-.122.001-.395.086-.189.119-.404.073-.478-.05-.08-.025-.099.061-.046.079.049.144.026.144-.051s.05-.109.112-.071c.061.038.145-.018.187-.126.074-.193.327-.139.327.07zm-16.179.198c-.115.115-.244.173-.287.13s.03-.158.162-.255c.311-.227.394-.144.125.125zm3.362-.189c-.031.05.028.123.131.163s.187.118.187.174c0 .156-.612.094-.785-.08-.121-.122-.107-.136.067-.07.16.061.201.034.151-.097-.041-.108.006-.181.118-.181.103 0 .162.041.131.091zm-5.388.305c-.04.103-.143.188-.231.188-.243 0-.49.337-.295.402.095.032.107.082.031.129-.192.119-.443-.091-.361-.303.055-.143.612-.511.901-.596.015-.004-.005.076-.044.18zm-6.005.593c-.121.209-.496.324-.671.205-.156-.105-.155-.119.007-.101.363.039.511-.011.491-.166-.047-.365.027-.53.128-.281.055.137.076.292.047.343zm4.588-.347c-.175.212.143.645.371.504.069-.043.125-.032.124.023-.004.202-.192.352-.483.384-.259.029-.276.007-.133-.166.197-.237-.035-.451-.37-.341-.109.036-.03-.08.176-.257.424-.364.541-.419.315-.147zm12.084.172c-.099.113-.21.291-.248.394-.045.123-.072.091-.079-.094-.005-.155.046-.281.115-.281s.118-.042.11-.094c-.033-.211.022-.291.148-.214.09.055.075.15-.046.289zm-2.179.487c-.033.086.006.157.087.157.09 0 .116.097.068.25-.047.149-.023.25.061.25.077 0 .106-.056.063-.125s-.018-.125.055-.125.118-.051.101-.113c-.017-.062.011-.118.062-.125.295-.039.469.002.469.113 0 .069-.072.125-.16.125-.142 0-.16.149-.1.796.006.06.123.079.26.043s.221-.018.185.039c-.035.058-.007.141.065.184.194.12.022.311-.289.321-.264.009-.265.013-.024.116.214.092.218.109.031.116-.12.005-.219.077-.219.16 0 .093-.085.065-.219-.07-.202-.205-.203-.23-.011-.339.13-.074.182-.212.14-.373-.037-.14-.097-.225-.133-.189s-.142.004-.234-.073c-.092-.076-.169-.09-.17-.03s-.052.029-.114-.068c-.064-.101-.066-.299-.004-.46.059-.156.063-.301.008-.323s-.138-.199-.186-.393c-.074-.301-.06-.329.09-.188.097.091.149.235.116.322zm1.285-.3c.149-.057.154-.001.028.351-.104.291-.163.352-.195.2-.025-.12-.122-.219-.216-.219s-.211-.065-.26-.144c-.052-.084-.035-.111.042-.063.072.045.172-.017.221-.137.057-.139.111-.164.146-.069.031.082.136.119.233.081zm-8.66.032c.153.153-.058.395-.291.334-.249-.065-.305-.18-.159-.326.104-.104.35-.108.45-.009zm9.835.313c-.171.32-.243.299-.243-.071 0-.221.052-.288.185-.237.14.054.154.129.058.309zm-10.398.331c.032.099-.072.156-.285.156-.242 0-.317.051-.267.181.044.114.009.158-.093.119-.098-.038-.139-.186-.103-.375.065-.338.643-.401.748-.081zm7.78.169c0 .061-.06.112-.133.112s-.103.048-.066.107c.036.059-.073.081-.243.048-.199-.038-.309-.002-.309.101 0 .088-.034.127-.075.085s.006-.191.105-.333c.099-.141.217-.22.263-.175s.083.019.083-.059.084-.11.188-.07.188.122.188.183zm-11.613.4c-.163.163-.186-.018-.047-.372.087-.221.092-.221.137.003.026.128-.015.294-.09.369zm.974-.364c.192.107.248.196.156.253-.078.048-.142.037-.142-.026s-.127-.174-.281-.249c-.155-.075-.225-.137-.156-.14s.259.07.423.161zm.92-.091c-.264.106-.187.454.084.383.169-.044.221-.011.174.11-.086.224-.221.22-.413-.012-.179-.216-.083-.569.151-.554.125.008.126.023.004.073zm.612.028c-.118.075-.128.133-.031.193.076.047.194.051.262.009.071-.044.092.006.049.118-.098.257-.206.245-.385-.043-.152-.243-.099-.39.14-.387.075.001.059.05-.034.109zm-5.487.329c.075.391-.026.464-.333.239-.213-.155-.216-.181-.031-.252.113-.043.175-.129.137-.191s-.016-.112.049-.112.145.142.178.315zm18.844-.197c0 .065-.057.153-.127.196s-.09.145-.044.226c.063.113.045.113-.077 0a.342.342 0 0 1-.085-.344c.081-.212.333-.271.333-.078zm5.92.569c-.076.198-.295.26-.295.083 0-.132.136-.271.267-.271.055 0 .068.084.028.187zm-18.17.133c0 .107-.056.16-.125.118s-.13.024-.135.149c-.006.138-.035.164-.074.066-.035-.088.004-.243.088-.344.194-.233.247-.231.247.012zm10.353.383c-.027.136-.191.212-.498.23-.457.027-.458.027-.188-.198.345-.288.741-.306.686-.032zm-6.627.388c-.101.121-.171.137-.201.047-.026-.077-.098-.108-.161-.069s-.114-.009-.114-.107c0-.122.098-.159.315-.117.263.05.29.091.161.246zm.949-.102c.217.18.279.449.075.323-.069-.043-.125-.021-.125.048s.056.16.125.202c.209.129.14.279-.12.264-.231-.013-.618-.394-.626-.616-.002-.056.108-.066.246-.023.143.046.25.023.25-.054 0-.073-.063-.119-.141-.102s-.165-.035-.195-.115c-.069-.188.251-.142.51.073zm10.825.011c-.242.157-.375.157-.375 0 0-.069.127-.124.281-.123.227.002.245.025.094.123zm1.418.281c-.032.052-.134.094-.227.094s-.197.07-.23.156-.055.044-.049-.094c.008-.171.099-.25.288-.25.152 0 .25.042.218.094zm-13.418.344c.335.335.315.5-.063.5-.279 0-.373.117-.327.406.008.052-.055.08-.141.062-.091-.018-.139.067-.115.206.039.224.029.225-.172.024-.117-.117-.285-.186-.373-.152-.22.084-.605-.369-.515-.605.12-.313.436-.22.649.192.169.326.227.36.392.223.124-.103.143-.177.054-.207-.087-.029-.035-.195.138-.442.168-.239.197-.331.075-.233s-.232.115-.277.042c-.067-.109.091-.231.333-.257.052-.005.206.103.344.24zm2.469.032c.086-.029.156.012.156.091 0 .083.098.113.229.071.153-.049.229-.01.229.117 0 .284-.38.228-.743-.108-.23-.213-.359-.259-.456-.162s-.135.095-.135-.005c0-.209.295-.279.438-.104.069.084.195.129.281.1zm-11.77-.013c.055.089.034.11-.055.055-.093-.057-.148.015-.154.199-.005.159-.039.216-.074.128-.131-.326.114-.657.284-.383zm20.601.648c.056.232.041.327-.045.274-.072-.044-.13-.227-.13-.406 0-.392.06-.347.175.133zm.921-.269c-.075.227-.305.259-.305.043 0-.105.08-.191.177-.191s.155.067.127.148zm-20.938.322c-.05.129-.025.165.071.105.08-.05.146-.031.146.042 0 .192-.202.162-.429-.064-.267-.267-.247-.418.045-.342.157.041.215.131.166.259zm.717-.08c0 .169-.202.132-.367-.067-.121-.146-.101-.166.11-.11.141.037.257.117.257.178zm-1.011.339c.179.15.177.16-.02.098-.12-.038-.219-.016-.219.048s-.094.081-.209.037c-.213-.081-.212-.078.047.558.043.105-.005.131-.144.077-.145-.056-.229-.001-.276.177-.037.142-.146.288-.243.325-.229.088-.225-.103.005-.294.099-.082.149-.23.111-.329-.051-.133-.008-.157.164-.093.207.078.213.064.057-.129-.126-.155-.138-.255-.041-.351.074-.074.101-.227.059-.339-.066-.177-.048-.181.135-.032s.212.141.221-.063c.008-.179.027-.19.083-.047.04.103.162.262.271.354zm2.225.021c-.036.137-.014.281.048.32s.111.137.109.219-.061.05-.131-.07c-.07-.12-.209-.219-.309-.219-.222 0-.242-.33-.025-.417.299-.121.372-.081.308.167zm18.665.125c.148.286.145.298-.046.141-.114-.094-.208-.258-.208-.365 0-.227.036-.195.254.224zm-22.455-.05c.174.067.175.095.004.265-.105.105-.23.148-.278.096s-.011-.122.083-.155c.144-.051.144-.077 0-.169-.197-.125-.091-.146.191-.037zm20.645.039c-.039.063 0 .14.086.17s.114.102.061.159c-.131.14-.39-.138-.286-.307.046-.075.112-.136.147-.136s.031.051-.008.114zm-11.489.415c-.231.149-.455.109-.455-.081 0-.231.267-.316.452-.145.108.1.109.158.003.226zm1.336-.248c-.055.086-.1.207-.101.269s-.101.128-.221.145c-.136.02-.188-.023-.137-.113.165-.29.327-.458.441-.458.064 0 .073.07.018.156zm.334.804c0 .159-.025.158-.188-.005-.103-.103-.187-.218-.187-.255s.084-.035.187.005.188.154.188.255zm-9.125.115c0 .152-.031.156-.174.024-.096-.089-.148-.204-.116-.257.087-.143.291.021.291.233zM30.75 29c0 .139-.083.25-.188.25s-.188-.111-.188-.25.083-.25.188-.25.188.111.188.25zm-7.25 1.577c0 .229-.045.219-.305-.069-.21-.232-.208-.239.043-.173.144.038.261.146.261.241zm-.264.435c-.294.186-.466.128-.398-.134.054-.205.107-.224.318-.111.203.109.219.157.08.245zm22.091.622c.01.202-.031.366-.092.366s-.11-.206-.11-.458c0-.532.175-.452.202.092zm-19.667.081c-.075.195-.075.195-.275-.19-.139-.267-.132-.276.096-.134.135.084.215.23.18.324zm9.639-.037c-.092.24-.395.344-.502.172-.052-.084-.029-.104.059-.05.085.053.144.01.144-.106 0-.107.083-.195.184-.195.108 0 .155.074.115.178zm-10.76.4c-.052.137-.109.145-.241.035-.248-.206-.213-.35.069-.276.146.038.214.134.173.242zm15.086 2.008c0 .246-.301.137-.353-.127-.028-.145.019-.185.156-.133.108.042.197.159.197.26zm1.801 1.057c-.036.059-.189.105-.34.103-.242-.003-.249-.018-.06-.128.126-.073.186-.213.146-.34-.058-.184-.039-.181.126.022.107.13.164.285.128.344zm-17.619 1.366c-.093.15-.432.151-.432.002 0-.136.271-.25.408-.172.053.03.063.107.024.171zm11.318.664c0 .026-.084.209-.187.406-.137.263-.187.296-.188.126-.001-.138-.066-.207-.161-.171s-.161-.033-.161-.174c0-.175.09-.236.348-.236.191 0 .348.022.348.048zm1.328.424c-.176.173-.212.178-.18.028.044-.21.251-.393.341-.303.032.032-.04.156-.161.275zm-1.275.575c.205.106.27.194.171.228-.089.031-.26-.046-.38-.172-.262-.274-.227-.283.209-.056zm-9.959.483c-.021.062-.091.114-.157.114s-.136-.051-.157-.114.05-.114.157-.114.177.051.157.114zm2.595 1.722c.043.07.14.089.214.043.081-.05.1-.026.046.061-.084.136-.574-.012-.574-.173 0-.11.235-.058.314.069zm1.428.286c.126-.033.259-.013.295.046s-.14.105-.392.105c-.293-.001-.447.053-.428.15.018.093-.049.121-.177.072-.139-.053-.177-.031-.116.067.131.212.009.179-.18-.048-.089-.107-.11-.185-.047-.173.252.048.438-.014.371-.123-.039-.064.028-.136.149-.161s.237-.007.257.04.141.058.267.025zM25.313 49c-.071.115.1.181.353.137.057-.01.07.035.031.099-.044.071-.218.062-.443-.023-.249-.094-.321-.172-.218-.237.216-.137.369-.124.278.024z"
    />
  </svg>
);

export default SvgCone;
