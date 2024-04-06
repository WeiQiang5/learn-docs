import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.D07BVtyQ.js";const k=JSON.parse('{"title":"一.什么是hooks","description":"","frontmatter":{},"headers":[],"relativePath":"column/React/hooks.md","filePath":"column/React/hooks.md"}'),p={name:"column/React/hooks.md"},l=e(`<h1 id="一-什么是hooks" tabindex="-1">一.什么是hooks <a class="header-anchor" href="#一-什么是hooks" aria-label="Permalink to &quot;一.什么是hooks&quot;">​</a></h1><ul><li>hooks是react16.8版本新增的特性，它可以让你在不编写class的情况下使用state以及其他的react特性</li><li>凡是use开头的React api 都是hooks</li><li>如果你在编写函数组件并意识到需要向其添加一些 state，以前的做法是必须将其它转化为 class。现在你可以直接在现有的函数组件中使用 Hooks</li></ul><h1 id="二-react中的hooks" tabindex="-1">二.react中的hooks <a class="header-anchor" href="#二-react中的hooks" aria-label="Permalink to &quot;二.react中的hooks&quot;">​</a></h1><h2 id="_1-usestate" tabindex="-1">1. useState <a class="header-anchor" href="#_1-usestate" aria-label="Permalink to &quot;1. useState&quot;">​</a></h2><blockquote><p>使用方法</p></blockquote><ul><li>const [state,setState] = useState(initialState)</li><li>其中state指状态值，setState指修改该状态值的方法,initialState是初始值，也可以写成函数.如果你将函数作为 initialState 传递，它将被视为初始化函数。它应该是纯粹的，不带任何参数，并且应该返回任何类型的值。React 在初始化组件时会调用你的初始化函数，并将其返回值存储为初始状态。</li><li>快捷键：使用usf</li></ul><div class="language-React vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">React</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [name,setName] = useState(&quot;Edward&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleClick(){</span></span>
<span class="line"><span>    setName(&quot;Taylor&quot;)</span></span>
<span class="line"><span>    setAge(a =&gt; a+1)</span></span>
<span class="line"><span>}</span></span></code></pre></div><blockquote><p>遇到问题</p></blockquote><ul><li>1.需要根据之前的状态跟新状态,下面这段代码中setAge虽然调用3次，但是只会取最后一次，并且是异步调用的</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>问题:需要取得最新值并更新</span></span>
<span class="line"><span>const [age,setAge] = useState[42]</span></span>
<span class="line"><span>function handleClick() {</span></span>
<span class="line"><span>    setAge(age + 1)// setAge(42 + 1)</span></span>
<span class="line"><span>    setAge(age + 1)// setAge(42 + 1)</span></span>
<span class="line"><span>    setAge(age + 1)// setAge(42 + 1)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>解决方法1:向set方法中传递函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [age,setAge] = useState[42]</span></span>
<span class="line"><span>function handleClick() {</span></span>
<span class="line"><span>    setAge((age) =&gt; age + 1)// setAge(42 + 1)</span></span>
<span class="line"><span>    setAge((age) =&gt; age + 1)// setAge(43 + 1)</span></span>
<span class="line"><span>    setAge((age) =&gt; age + 1)// setAge(44 + 1)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>解决方法2:使用useEffect</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [age,setAge] = useState[42]</span></span>
<span class="line"><span>function handleClick() {</span></span>
<span class="line"><span>    setAge(age+1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>useEffect(() =&gt; {</span></span>
<span class="line"><span> console.log(&quot;age最新值&quot;,age)</span></span>
<span class="line"><span>},[age])</span></span></code></pre></div><ul><li>解决方法3:使用useRef</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const countRef = useRef(null)</span></span>
<span class="line"><span>const [age,setAge] = useState[42]</span></span>
<span class="line"><span>function handleClick() {</span></span>
<span class="line"><span>    countRef.current = age+1</span></span>
<span class="line"><span>    setAge(age+1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>useEffect(() =&gt; {</span></span>
<span class="line"><span> console.log(&quot;age最新值&quot;,age)</span></span>
<span class="line"><span>},[age])</span></span></code></pre></div><ul><li>2.react报错之can not assign to &#39;current&#39; because it is a read-only property</li></ul><ul><li>引起原因:当我们用null初始化一个ref,但在其类型中不包括null时,就会发生&quot;Cannot assign to &#39;current&#39; because it is a read-only property&quot;错误.为了解决该错误，请在ref的类型中包含null。比如说，const ref = useRef&lt;string | null&gt;(null)</li><li>解决方法：T加null，</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// App.tsx</span></span>
<span class="line"><span>import {useEffect, useRef} from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const App = () =&gt; {</span></span>
<span class="line"><span>    &lt;!-- 错误 --&gt;</span></span>
<span class="line"><span>  const ref = useRef&lt;string&gt;(null);</span></span>
<span class="line"><span>   &lt;!-- 正确的 --&gt;</span></span>
<span class="line"><span>   const ref = useRef&lt;string|null&gt;(null);</span></span>
<span class="line"><span>  useEffect(() =&gt; {</span></span>
<span class="line"><span>    // ⛔️ Error: Cannot assign to &#39;current&#39; because it is a read-only property.ts(2540)</span></span>
<span class="line"><span>    ref.current = &#39;hello&#39;;</span></span>
<span class="line"><span>  }, []);</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h2&gt;hello world&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre></div><h2 id="_2-useeffect" tabindex="-1">2.useEffect <a class="header-anchor" href="#_2-useeffect" aria-label="Permalink to &quot;2.useEffect&quot;">​</a></h2><blockquote><p>使用方法</p></blockquote><ul><li>useEffect(setup,dependencies?)</li><li>setup:具有副作用逻辑的函数.当你的组件被添加到DOM时，react将运行你的设置函数。在每次使用更改的依赖重新渲染后,react将首先使用旧值运行清理函数（如果你提供了它），然后使用新值运行你的设置函数。在你的组件从dom中移除后，react将运行你的清理函数</li><li>可选dependencies:setup代码中引用的所有反应值的列表.react中使用Object.is比较将每个依赖与其先前的值进行比较。如果省略此参数，你的副作用将在每次重新渲染组件后重新运行</li></ul><blockquote><p>依赖传递3种形式</p></blockquote><ul><li>1.传递依赖数组</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>useEffect(() =&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>},[a,b])</span></span></code></pre></div><ul><li>2.传递一个空的依赖数组,它只会在初始渲染后运行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>useEffect(() =&gt; {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>},[])</span></span></code></pre></div><ul><li>3.根本不传递依赖数组,会在组件的每次渲染后运行</li></ul><blockquote><p>根据</p></blockquote><h2 id="_3" tabindex="-1">3. <a class="header-anchor" href="#_3" aria-label="Permalink to &quot;3.&quot;">​</a></h2>`,30),t=[l];function i(c,o,u,r,g,d){return n(),a("div",null,t)}const f=s(p,[["render",i]]);export{k as __pageData,f as default};
