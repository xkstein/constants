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

<fieldset style="margin-top: 1rem;">
  <legend>Output</legend>
  <pre id="output" contenteditable='true' bind:textContent={output}></pre>
</fieldset>

<style>
  #output {
    font-family: monospace;
    margin: 0;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
