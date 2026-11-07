import Redacted from "~/components/redacted";

const en = {
  name: "Vladimir Malinovsky",
  role: "Site Reliability Engineer",
  description: "Site Reliability Engineer at Selectel in Saint Petersburg.",
  theme: "Toggle theme",
  intro: "I look after production infrastructure and write the tools for it.",
  experience: (
    <>
      <p>
        <b>Selectel</b>, since 2024, in the{" "}
        <Redacted label="redacted">[REDACTED]</Redacted> team: production
        Kubernetes, CI/CD, observability and networking, plus on-call, incidents
        and post-mortems. I also develop{" "}
        <Redacted label="redacted">[REDACTED R]</Redacted>, one of our products,
        and built <Redacted label="redacted">[REDACTED REDACTED]</Redacted> and{" "}
        <Redacted label="redacted">[REDACTED REDACTE]</Redacted>.
      </p>
      <p>
        <b>Sysadmin intern</b> at{" "}
        <Redacted label="redacted">[REDACTED RE]</Redacted> in Omsk,{" "}
        <Redacted label="redacted">[RE]</Redacted>: a Proxmox cluster, Jitsi and
        monitoring.
      </p>
      <p>
        <b>Homelab</b> of <Redacted label="redacted">[REDAC]</Redacted> servers
        and <Redacted label="redacted">[RE]</Redacted> VPS: storage, mail and
        authoritative DNS through GitOps. Ingress on my{" "}
        <a href="https://git.horse/vapronva/ckic">CKIC</a>, backends on my{" "}
        <a href="https://git.horse/vapronva/concave">Concave</a>.
      </p>
    </>
  ),
  education: (
    <>
      <b>ITMO University</b>, Saint Petersburg: Software Engineering, then
      Programming in Infocommunication Systems. School exchanges in the UK and
      Germany.
    </>
  ),
  languages: "Russian (native), English (C1), German (A2).",
};

const ru: typeof en = {
  name: "Владимир Малиновский",
  role: "SRE-инженер",
  description: "SRE-инженер в Selectel, Санкт-Петербург.",
  theme: "Переключить тему",
  intro: "Отвечаю за инфраструктуру прода и пишу для неё инструменты.",
  experience: (
    <>
      <p>
        <b>Selectel</b>, с 2024 года, в команде{" "}
        <Redacted label="скрыто">[REDACTED]</Redacted>: Kubernetes, CI/CD,
        наблюдаемость и сети в проде, плюс дежурства, инциденты и постмортемы.
        Ещё разрабатываю <Redacted label="скрыто">[REDACTED R]</Redacted>, один
        из наших продуктов, и сделал{" "}
        <Redacted label="скрыто">[REDACTED REDACTED]</Redacted> и{" "}
        <Redacted label="скрыто">[REDACTED REDACTE]</Redacted>.
      </p>
      <p>
        <b>Стажёр-сисадмин</b> в{" "}
        <Redacted label="скрыто">[REDACTED RE]</Redacted> в Омске,{" "}
        <Redacted label="скрыто">[RE]</Redacted>: кластер Proxmox, Jitsi и
        мониторинг.
      </p>
      <p>
        <b>Хоумлаб</b> из <Redacted label="скрыто">[REDAC]</Redacted> серверов и{" "}
        <Redacted label="скрыто">[RE]</Redacted> VPS: хранилище, почта и
        авторитативный DNS через GitOps. Ingress на моём{" "}
        <a href="https://git.horse/vapronva/ckic">CKIC</a>, бэкенды на моём{" "}
        <a href="https://git.horse/vapronva/concave">Concave</a>.
      </p>
    </>
  ),
  education: (
    <>
      <b>Университет ИТМО</b>, Санкт-Петербург: программная инженерия, затем
      программирование в инфокоммуникационных системах. Школьные обмены в
      Великобритании и Германии.
    </>
  ),
  languages: "Русский (родной), английский (C1), немецкий (A2).",
};

export const copy = { en, ru };

export type Lang = keyof typeof copy;

export function isLang(value: string): value is Lang {
  return Object.hasOwn(copy, value);
}
