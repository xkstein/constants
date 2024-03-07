<script>
  import constants from '$lib/constants.json'

  let output = "";
  let output_format = "desmos";

  const state = {};

  Object.entries(constants).forEach((entry) => {
    let units = Object.keys(entry[1].values)[0];

    state[entry[0]] = {
      "units": units,
      "checked": false
    };
  });

  function update_output() {
    output = '';
    Object.entries(state).forEach((entry) => {
      let name = entry[0];
      let checked = entry[1].checked;
      let units = entry[1].units;

      if (checked) {
        // output += constants[name].nickname + ' = ' + constants[name].values[units] + ' % ' + units + '\n';
        output += style_command(constants[name].nickname, constants[name].values[units], units, output_format);
      }
    });
  }

  function style_command(nickname, value, units, style='desmos') {
    if (style == 'python') {
      return nickname + ' = ' + value + ' # ' + units + '\n';
    } else if (style == 'mathematica') {
      nickname  = nickname.replace('_', '');
      return nickname + ' = ' + value + ';\n';
    } else if (style == 'desmos') {
      if ( nickname.length > 1 ) {
        if (nickname.includes('_')) {
          let ind = nickname.indexOf('_');
          nickname = nickname[0] + '_{' + nickname.slice(ind + 1) + '}'
        } else {
          nickname = nickname[0] + '_{' + nickname.slice(1) + '}'
        }
      }

      let value_str = String(value);
      if (value_str.includes('e')) {
        let ind_e = value_str.indexOf('e');
        let exponential = value_str.slice(ind_e + 1);
        let front = value_str.slice(0, ind_e);
        value_str = front + ' \\cdot 10^{' + exponential + '}'
      }
      return nickname + ' = ' + value_str + '\n';
    }
    return nickname + ' = ' + value + ' # ' + units + '\n';
  }

  function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }
</script>

<h1>Physical Constants</h1>

<fieldset>
  <legend>Choose your constants</legend>
  {#each Object.entries(constants) as [name, data]}
    <div class="checkbox">
      <div>
        <input type="checkbox" bind:checked={state[name].checked} on:change={update_output}/>
        <label>{name} ({data.nickname})</label>
      </div>

      <div>
        {expo(data.values[state[name].units], 2)}

        <select bind:value={state[name].units} on:change={update_output}>
          {#each Object.keys(data.values) as unit}
            <option>{unit}</option>
          {/each}
        </select>
      </div>
    </div>
  {/each}
</fieldset>

<select bind:value={output_format} on:change={update_output}>
  <option>desmos</option>
  <option>python</option>
  <option>mathematica</option>
</select>

<div>
  <pre id="output" contenteditable='true' bind:textContent={output}></pre>
</div>

<style>
  h1 {
    font-family: 'Times New Roman', Times, serif;

    background: linear-gradient(150deg, rgba(0,0,0,1) 25%, rgba(239,83,80,1) 30%, rgba(244,143,177,1) 35%, rgba(126,87,194,1) 40%, rgba(33,150,243,1) 45%, rgba(38,198,218,1) 50%, rgba(67,160,71,1) 55%, rgba(173,231,52,1) 60%, rgba(249,168,37,1) 65%, rgba(255,87,34,1) 70%, rgba(0,0,0,1) 75%);
    background-size: 500% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    -webkit-animation: Animation 5s linear infinite;
    animation: Animation 20s linear infinite;
    animation-delay: 2s;
  }

  @-webkit-keyframes Animation {
    0% {background-position: 0% 0%}
    25% {background-position: 100% 100%}
    100% {background-position: 100% 100%}
  }

  @keyframes Animation {
    0% {background-position: 0% 0%}
    25% {background-position: 100% 100%}
    100% {background-position: 100% 100%}
  }

  #output {
    font-family: monospace;

    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    background-color:	#2b3345;
    color: #fff;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
