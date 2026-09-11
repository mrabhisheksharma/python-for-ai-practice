
// dynamic_graphics.js

const graphicsConfig = {

    'basics-1': {
        left: `<img src=\"assets/basics-1.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Memory Mapping</text>
            <rect x="20" y="60" width="240" height="140" class="bg" />
            <text x="40" y="90" class="code">name = "Model-A"</text>
            <text x="40" y="120" class="code">accuracy = 91.4</text>
            <text x="40" y="150" class="code">epochs = 50</text>
            <text x="40" y="180" class="code">is_trained = True</text>
            <text x="140" y="240" class="text" text-anchor="middle">Dynamic typing assigns types at runtime.</text>
        </svg>`
    },
    'basics-2': {
        left: `<img src=\"assets/basics-2.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 16px; fill: var(--accent); font-weight: bold; }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Operators</text>
            <rect x="40" y="60" width="200" height="40" class="box" />
            <text x="140" y="85" class="code" text-anchor="middle">+  -  *  /</text>
            <rect x="40" y="110" width="200" height="40" class="box" />
            <text x="140" y="135" class="code" text-anchor="middle">>  <  ==  !=</text>
            <rect x="40" y="160" width="200" height="40" class="box" />
            <text x="140" y="185" class="code" text-anchor="middle">and  or  not</text>
            <rect x="40" y="210" width="200" height="40" class="box" />
            <text x="140" y="235" class="code" text-anchor="middle">+=  -=</text>
        </svg>`
    },
    'control-1': {
        left: `<img src=\"assets/control-1.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 4; }
                .diamond { fill: var(--accent-glow); stroke: var(--accent); stroke-width: 2; }
                .line { stroke: var(--text-main); stroke-width: 2; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Branching</text>
            <polygon points="140,60 200,100 140,140 80,100" class="diamond" />
            <text x="140" y="105" class="text" text-anchor="middle">acc > 90?</text>
            <line x1="80" y1="100" x2="40" y2="100" class="line" />
            <line x1="40" y1="100" x2="40" y2="150" class="line" />
            <rect x="10" y="150" width="60" height="40" class="box" />
            <text x="40" y="175" class="text" text-anchor="middle">Yes</text>

            <line x1="200" y1="100" x2="240" y2="100" class="line" />
            <line x1="240" y1="100" x2="240" y2="150" class="line" />
            <rect x="210" y="150" width="60" height="40" class="box" />
            <text x="240" y="175" class="text" text-anchor="middle">No</text>
        </svg>`
    },
    'control-2': {
        left: `<img src=\"assets/control-2.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Iteration</text>
            <rect x="20" y="60" width="240" height="100" class="bg" />
            <text x="40" y="90" class="code">for score in scores:</text>
            <text x="60" y="120" class="code">print(score)</text>
            <text x="140" y="200" class="text" text-anchor="middle" fill="#10b981">Iterates exactly N times</text>
            <text x="140" y="220" class="text" text-anchor="middle">(once for each item)</text>
        </svg>`
    },
    'control-3': {
        left: `<img src=\"assets/control-3.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: While Loop</text>
            <rect x="20" y="60" width="240" height="120" class="bg" />
            <text x="40" y="90" class="code">while epochs > 0:</text>
            <text x="60" y="120" class="code">train_model()</text>
            <text x="60" y="150" class="code">epochs -= 1</text>
            <text x="140" y="220" class="text" text-anchor="middle" fill="#ef4444">Risk: Infinite Loop if condition</text>
            <text x="140" y="240" class="text" text-anchor="middle" fill="#ef4444">never becomes false!</text>
        </svg>`
    },

    'ds-1': {
        left: `<img src=\"assets/ds-1.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
                .line { stroke: var(--border); stroke-width: 2; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Array</text>
            <rect x="20" y="60" width="240" height="50" class="box" />
            <line x1="100" y1="60" x2="100" y2="110" class="line" />
            <line x1="180" y1="60" x2="180" y2="110" class="line" />
            <text x="60" y="90" class="text" text-anchor="middle">91.4</text>
            <text x="140" y="90" class="text" text-anchor="middle">85.2</text>
            <text x="220" y="90" class="text" text-anchor="middle">78.0</text>
            <text x="60" y="130" class="text" text-anchor="middle" font-size="12px" fill="var(--text-muted)">[0]</text>
            <text x="140" y="130" class="text" text-anchor="middle" font-size="12px" fill="var(--text-muted)">[1]</text>
            <text x="220" y="130" class="text" text-anchor="middle" font-size="12px" fill="var(--text-muted)">[2]</text>
        </svg>`
    },
    'ds-2': {
        left: `<img src=\"assets/ds-2.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
                .line { stroke: var(--border); stroke-dasharray: 4; stroke-width: 2; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Tuple</text>
            <rect x="40" y="60" width="200" height="50" class="box" stroke-dasharray="4" />
            <line x1="140" y1="60" x2="140" y2="110" class="line" />
            <text x="90" y="90" class="text" text-anchor="middle">28.7</text>
            <text x="190" y="90" class="text" text-anchor="middle">77.1</text>
        </svg>`
    },
    'ds-3': {
        left: `<img src=\"assets/ds-3.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Key-Value</text>
            <rect x="10" y="60" width="80" height="30" class="box" />
            <text x="50" y="80" class="text" text-anchor="middle">"name"</text>
            <text x="110" y="80" class="text" text-anchor="middle">→</text>
            <rect x="130" y="60" width="130" height="30" class="box" />
            <text x="195" y="80" class="text" text-anchor="middle">"Model-A"</text>

            <rect x="10" y="100" width="80" height="30" class="box" />
            <text x="50" y="120" class="text" text-anchor="middle">"accuracy"</text>
            <text x="110" y="120" class="text" text-anchor="middle">→</text>
            <rect x="130" y="100" width="130" height="30" class="box" />
            <text x="195" y="120" class="text" text-anchor="middle">91.4</text>
        </svg>`
    },
    'ds-4': {
        left: `<img src=\"assets/ds-4.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Set Operations</text>
            <circle cx="100" cy="120" r="50" fill="var(--accent)" fill-opacity="0.3" stroke="var(--accent)" stroke-width="2" />
            <circle cx="180" cy="120" r="50" fill="var(--output-accent)" fill-opacity="0.3" stroke="var(--output-accent)" stroke-width="2" />
            <text x="70" y="125" class="text" text-anchor="middle">A</text>
            <text x="210" y="125" class="text" text-anchor="middle">B</text>
            <text x="140" y="125" class="text" text-anchor="middle">A &amp; B</text>
        </svg>`
    },
    'oop-1': {
        left: `<img src=\"assets/oop-1.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 12px; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: bold; fill: #fff; }
                .class-box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
                .class-header { fill: var(--accent); }
                .line { stroke: var(--accent); stroke-width: 2; fill: none; }
            </style>
            <text x="140" y="20" class="title" fill="var(--accent)" text-anchor="middle">Technical: UML</text>
            <rect x="40" y="40" width="200" height="100" class="class-box" />
            <rect x="40" y="40" width="200" height="30" class="class-header" rx="6" />
            <text x="140" y="60" class="title" text-anchor="middle">AIModel</text>
            <text x="50" y="88" class="text">+ name</text>
            <text x="50" y="105" class="text">+ accuracy</text>
            <path d="M 40 115 L 240 115" class="line" stroke="var(--border)" />
            <text x="50" y="132" class="text">+ summary()</text>
        </svg>`
    },
    'oop-2': {
        left: `<img src=\"assets/oop-2.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'JetBrains Mono', monospace; font-size: 13px; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Abstract Class</text>
            <rect x="20" y="60" width="240" height="120" class="box" />
            <text x="30" y="90" class="text" fill="var(--accent)">class</text>
            <text x="80" y="90" class="text">BaseModel(ABC):</text>
            <text x="50" y="130" class="text" fill="var(--accent)">@abstractmethod</text>
            <text x="50" y="150" class="text" fill="var(--accent)">def</text>
            <text x="80" y="150" class="text">predict(x):</text>
            <text x="80" y="170" class="text" fill="var(--text-muted)">pass</text>
        </svg>`
    },
    'oop-3': {
        left: `<img src=\"assets/oop-3.jpg\" alt=\"Real World Metaphor\" style=\"width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);\">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 12px; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: bold; fill: #fff; }
                .class-box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 6; }
                .class-header { fill: var(--accent); }
                .line { stroke: var(--accent); stroke-width: 2; fill: none; }
            </style>
            <text x="140" y="20" class="title" fill="var(--accent)" text-anchor="middle">Technical: Inheritance</text>
            <rect x="40" y="40" width="200" height="60" class="class-box" />
            <rect x="40" y="40" width="200" height="30" class="class-header" rx="6" />
            <text x="140" y="60" class="title" text-anchor="middle">AIModel</text>
            <text x="50" y="88" class="text">+ predict()</text>
            
            <line x1="140" y1="100" x2="140" y2="150" class="line" marker-end="url(#triangle-small)" />
            
            <rect x="40" y="160" width="200" height="60" class="class-box" />
            <rect x="40" y="160" width="200" height="30" class="class-header" rx="6" />
            <text x="140" y="180" class="title" text-anchor="middle">AdvancedModel</text>
            <text x="50" y="208" class="text">+ predict() [override]</text>

            <defs>
                <marker id="triangle-small" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--bg-main)" stroke="var(--accent)" stroke-width="2" />
                </marker>
            </defs>
        </svg>`
    },
    'oop-4': {
        left: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); font-weight: 500;}
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 12; }
                .safe { fill: var(--bg-alt); stroke: var(--accent); stroke-width: 4; rx: 8; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Real Life: Safe / Capsule</text>
            <rect x="40" y="80" width="200" height="150" class="safe" />
            <circle cx="140" cy="155" r="30" fill="none" stroke="var(--accent)" stroke-width="4" />
            <path d="M 140 155 L 140 135" stroke="var(--accent)" stroke-width="4" />
            <text x="140" y="260" class="text" text-anchor="middle">Protects valuable contents</text>
        </svg>`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 14px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 8; }
                .private { fill: var(--accent-glow); stroke: #ef4444; stroke-width: 2; rx: 8; stroke-dasharray: 4;}
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Technical: Encapsulation</text>
            <rect x="40" y="70" width="200" height="160" class="box" />
            <text x="140" y="100" class="text" text-anchor="middle" font-weight="bold">Class: APIClient</text>
            
            <rect x="60" y="120" width="160" height="40" class="private" />
            <text x="140" y="145" class="text" text-anchor="middle" fill="#ef4444">__api_key (Private)</text>
            
            <rect x="60" y="170" width="160" height="40" class="box" stroke="var(--accent)" />
            <text x="140" y="195" class="text" text-anchor="middle">fetch_data() (Public)</text>
        </svg>`
    },
    
    'exceptions': {
        left: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); font-weight: 500;}
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Real Life: Safety Net</text>
            <circle cx="140" cy="100" r="20" fill="var(--text-main)" />
            <path d="M 140 120 L 140 150 M 140 130 L 120 150 M 140 130 L 160 150 M 140 150 L 120 180 M 140 150 L 160 180" stroke="var(--text-main)" stroke-width="4" fill="none" />
            
            <path d="M 40 220 Q 140 260 240 220" stroke="#10b981" stroke-width="4" fill="none" stroke-dasharray="6" />
            <text x="140" y="280" class="text" text-anchor="middle" fill="#10b981">Graceful Recovery</text>
        </svg>`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 8; }
                .line { stroke: var(--border); stroke-width: 2; fill: none; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Try/Catch</text>
            <rect x="40" y="50" width="200" height="40" class="box" />
            <text x="140" y="75" class="text" text-anchor="middle">try: Call API</text>

            <path d="M 140 90 L 140 130 L 70 130 L 70 160" class="line" stroke="#10b981" />
            <rect x="20" y="160" width="100" height="40" class="box" stroke="#10b981" />
            <text x="70" y="185" class="text" text-anchor="middle" fill="#10b981">Success</text>

            <path d="M 140 90 L 140 130 L 210 130 L 210 160" class="line" stroke="#ef4444" stroke-dasharray="4" />
            <rect x="160" y="160" width="100" height="40" class="box" stroke="#ef4444" />
            <text x="210" y="185" class="text" text-anchor="middle" fill="#ef4444">except: Error</text>
        </svg>`
    },
    'api': {
        left: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); font-weight: 500;}
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="40" class="title" text-anchor="middle">Real Life: Restaurant</text>
            <rect x="20" y="80" width="80" height="100" class="box" />
            <text x="60" y="130" class="text" text-anchor="middle">You</text>
            
            <rect x="180" y="80" width="80" height="100" class="box" stroke="var(--accent)" />
            <text x="220" y="130" class="text" text-anchor="middle">Kitchen</text>

            <path d="M 100 110 L 180 110" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow-basic)" />
            <text x="140" y="100" class="text" text-anchor="middle" font-size="12px">Order (Req)</text>

            <path d="M 180 150 L 100 150" stroke="var(--text-main)" stroke-width="2" marker-end="url(#arrow-basic)" />
            <text x="140" y="170" class="text" text-anchor="middle" font-size="12px">Food (Res)</text>
            
            <defs>
                <marker id="arrow-basic" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-main)" />
                </marker>
            </defs>
        </svg>`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .label { font-family: 'JetBrains Mono', monospace; font-size: 11px; fill: var(--accent); }
                .box { fill: var(--bg-alt); stroke: var(--border); stroke-width: 2; rx: 8; }
                .line { stroke: var(--accent); stroke-width: 2; fill: none; stroke-dasharray: 4; }
                .server { fill: var(--accent-glow); stroke: var(--accent); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: REST API</text>
            <rect x="20" y="60" width="100" height="60" class="box" />
            <text x="70" y="85" class="text" text-anchor="middle">Client Code</text>

            <rect x="160" y="180" width="100" height="60" class="server" />
            <text x="210" y="215" class="text" text-anchor="middle">OpenAI</text>

            <path d="M 70 120 L 70 150 L 160 150 L 160 180" class="line" marker-end="url(#arrow-api2)" />
            <text x="115" y="140" class="label" text-anchor="middle">POST JSON</text>

            <path d="M 210 180 L 210 110 L 120 110 L 120 90" class="line" marker-end="url(#arrow-api2)" />
            <text x="165" y="100" class="label" text-anchor="middle">200 OK</text>
            <defs>
                <marker id="arrow-api2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                </marker>
            </defs>
        </svg>`
    }
,

    'func-1': {
        left: `<img src="assets/functions.jpg" alt="Real World Metaphor" style="width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Functions</text>
            <rect x="20" y="60" width="240" height="100" class="bg" />
            <text x="40" y="90" class="code">def calc(x):</text>
            <text x="60" y="120" class="code">return x * 2</text>
            <text x="140" y="220" class="text" text-anchor="middle" fill="#10b981">DRY Principle:</text>
            <text x="140" y="240" class="text" text-anchor="middle" fill="#10b981">Don't Repeat Yourself</text>
        </svg>`
    },
    'func-2': {
        left: `<img src="assets/functions.jpg" alt="Real World Metaphor" style="width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Modules</text>
            <rect x="20" y="60" width="240" height="100" class="bg" />
            <text x="40" y="90" class="code">import math</text>
            <text x="40" y="120" class="code">math.sqrt(16)</text>
            <text x="140" y="220" class="text" text-anchor="middle" fill="#f59e0b">Reusing external code</text>
            <text x="140" y="240" class="text" text-anchor="middle" fill="#f59e0b">via the Python Ecosystem</text>
        </svg>`
    },
    'file-1': {
        left: `<img src="assets/filehandling.jpg" alt="Real World Metaphor" style="width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: File I/O</text>
            <rect x="20" y="60" width="240" height="100" class="bg" />
            <text x="40" y="90" class="code">with open('data.txt') as f:</text>
            <text x="60" y="120" class="code">data = f.read()</text>
            <text x="140" y="220" class="text" text-anchor="middle" fill="#10b981">Context Managers ensure</text>
            <text x="140" y="240" class="text" text-anchor="middle" fill="#10b981">files are safely closed</text>
        </svg>`
    },
    'conc-1': {
        left: `<img src="assets/concurrency_office.jpg" alt="Real World Metaphor" style="width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; fill: var(--text-main); }
                .title { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: bold; fill: var(--accent); }
                .client { fill: var(--bg-alt); stroke: var(--border); stroke-width: 1.5; rx: 6; }
                .server { fill: rgba(14, 165, 233, 0.04); stroke: var(--border); stroke-width: 1.5; rx: 8; }
                .thread-active { fill: var(--bg-alt); stroke: #0ea5e9; stroke-width: 1.5; rx: 6; }
                .thread-wait { fill: var(--bg-alt); stroke: #f59e0b; stroke-width: 1.5; rx: 6; }
            </style>
            <defs>
                <marker id="arr-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#0ea5e9" />
                </marker>
                <marker id="arr-gold" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 1 L 9 5 L 0 9 z" fill="#f59e0b" />
                </marker>
            </defs>

            <text x="140" y="24" class="title" text-anchor="middle">Web Server: Thread Pool</text>

            <!-- Clients -->
            <rect x="10" y="50" width="52" height="36" class="client" />
            <text x="36" y="66" class="text" font-size="10px" font-weight="bold" text-anchor="middle">Client 1</text>
            <text x="36" y="78" class="text" font-size="8px" fill="var(--text-muted)" text-anchor="middle">Slow DB</text>

            <rect x="10" y="116" width="52" height="36" class="client" />
            <text x="36" y="132" class="text" font-size="10px" font-weight="bold" text-anchor="middle">Client 2</text>
            <text x="36" y="144" class="text" font-size="8px" fill="var(--text-muted)" text-anchor="middle">Fast req</text>

            <rect x="10" y="182" width="52" height="36" class="client" />
            <text x="36" y="198" class="text" font-size="10px" font-weight="bold" text-anchor="middle">Client 3</text>
            <text x="36" y="210" class="text" font-size="8px" fill="var(--text-muted)" text-anchor="middle">Fast req</text>

            <!-- Web Server Outer Box -->
            <rect x="74" y="38" width="196" height="196" class="server" />
            <text x="172" y="53" class="text" font-size="10px" font-style="italic" fill="var(--text-muted)" text-anchor="middle">Server Thread Pool</text>

            <!-- Thread 1 (Waiting on I/O) -->
            <rect x="86" y="62" width="172" height="44" class="thread-wait" />
            <text x="172" y="80" class="text" font-size="11px" font-weight="bold" fill="#f59e0b" text-anchor="middle">Thread 1 (Waiting ⏳)</text>
            <text x="172" y="94" class="text" font-size="9px" fill="#f59e0b" text-anchor="middle">Paused on I/O (3s DB wait)</text>

            <!-- Thread 2 (Active) -->
            <rect x="86" y="116" width="172" height="44" class="thread-active" />
            <text x="172" y="134" class="text" font-size="11px" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Thread 2 (Active ⚡)</text>
            <text x="172" y="148" class="text" font-size="9px" fill="#0ea5e9" text-anchor="middle">Serves Client 2 immediately!</text>

            <!-- Thread 3 (Active) -->
            <rect x="86" y="170" width="172" height="44" class="thread-active" />
            <text x="172" y="188" class="text" font-size="11px" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Thread 3 (Active ⚡)</text>
            <text x="172" y="202" class="text" font-size="9px" fill="#0ea5e9" text-anchor="middle">Serves Client 3 concurrently</text>

            <!-- Request Arrows -->
            <path d="M 62 68 L 84 76" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3" fill="none" marker-end="url(#arr-gold)" />
            <path d="M 62 134 L 84 134" stroke="#0ea5e9" stroke-width="1.5" fill="none" marker-end="url(#arr-blue)" />
            <path d="M 62 200 L 84 192" stroke="#0ea5e9" stroke-width="1.5" fill="none" marker-end="url(#arr-blue)" />

            <!-- Summary banner -->
            <rect x="10" y="246" width="260" height="44" rx="6" fill="rgba(14, 165, 233, 0.1)" stroke="#0ea5e9" stroke-width="1" />
            <text x="140" y="263" class="text" font-size="11px" font-weight="bold" fill="#0ea5e9" text-anchor="middle">Non-Blocking Request Handling</text>
            <text x="140" y="278" class="text" font-size="9.5px" fill="var(--text-main)" text-anchor="middle">Thread 1 waiting on I/O doesn't block Thread 2!</text>
        </svg>`
    },
    'conc-2': {
        left: `<img src="assets/concurrency_office.jpg" alt="Real World Metaphor" style="width:100%; border-radius: 12px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); border: 2px solid var(--border);">`,
        right: `<svg viewBox="0 0 280 300" xmlns="http://www.w3.org/2000/svg">
            <style>
                .text { font-family: 'Inter', sans-serif; font-size: 13px; fill: var(--text-main); font-weight: 500; }
                .title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: bold; fill: var(--accent); }
                .code { font-family: 'JetBrains Mono', monospace; font-size: 14px; fill: var(--code-text); }
                .bg { fill: var(--code-bg); stroke: var(--code-border); stroke-width: 2; rx: 8; }
            </style>
            <text x="140" y="30" class="title" text-anchor="middle">Technical: Processes</text>
            <rect x="20" y="60" width="240" height="100" class="bg" />
            <text x="40" y="90" class="code">import multiprocessing</text>
            <text x="40" y="120" class="code">p.start()</text>
            <text x="140" y="220" class="text" text-anchor="middle" fill="#f43f5e">Great for CPU bound</text>
            <text x="140" y="240" class="text" text-anchor="middle" fill="#f43f5e">Math & Model Training</text>
        </svg>`
    }

};

let updateGraphicsTimeout;

function updateSidePanels(sectionId, subId) {
    const leftPanel = document.getElementById('left-panel');
    const rightPanel = document.getElementById('right-panel');
    const bulbBtn = document.getElementById('bulb-btn');
    if (!leftPanel || !rightPanel) return;

    // Use subId if present, else fallback to sectionId
    const key = subId ? subId : sectionId;
    const graphicData = graphicsConfig[key];

    // Fade out and always reset bulb expansion
    leftPanel.classList.remove('show');
    rightPanel.classList.remove('show');
    if (bulbBtn) {
        bulbBtn.classList.remove('expanded');
    }

    clearTimeout(updateGraphicsTimeout);

    updateGraphicsTimeout = setTimeout(() => {
        const bulbBtn = document.getElementById('bulb-btn');
        if (graphicData) {
            leftPanel.innerHTML = graphicData.left || '';
            rightPanel.innerHTML = graphicData.right || '';
            
            if (bulbBtn) {
                // Only show bulb if there's an actual left graphic
                if (graphicData.left) {
                    bulbBtn.style.display = 'flex';
                } else {
                    bulbBtn.style.display = 'none';
                }
                bulbBtn.classList.remove('expanded');
            }
            
            // Fade in right technical panel
            setTimeout(() => {
                rightPanel.classList.add('show');
            }, 50);
        } else {
            leftPanel.innerHTML = '';
            rightPanel.innerHTML = '';
            if (bulbBtn) {
                bulbBtn.style.display = 'none';
                bulbBtn.classList.remove('expanded');
            }
        }
    }, 400); // Wait for fade out
}

window.toggleAnalogy = function() {
    const leftPanel = document.getElementById('left-panel');
    const bulbBtn = document.getElementById('bulb-btn');
    if (leftPanel) {
        const isShown = leftPanel.classList.toggle('show');
        if (bulbBtn) {
            bulbBtn.classList.toggle('expanded', isShown);
        }
    }
};
