import { Graphviz } from 'graphviz-react';
import React from 'react'; 
import './graphVis.css';

let happiness = "happiness2";

const GraphvizPage = () => {
  const dot = `
    graph happiness {
	fontname="URW Chancery L, Apple Chancery, Comic Sans MS, cursive"
	layout=twopi; graph [ranksep=2];
	edge [penwidth=5 color="#f0f0ff"]
	node [fontname="URW Chancery L, Apple Chancery, Comic Sans MS, cursive"]
	node [shape=circle style="filled" penwidth=0 fillcolor="#f0f0ffA0" fontcolor=indigo]
	${happiness} [fontsize=20 fontcolor=red URL="https://en.wikipedia.org/wiki/Category:Happiness"]
	node [fontsize=20]
	${happiness} -- {
		Peace
		Love
		Soul
		Mind
		Life
		Health
	}
	Life [fontcolor=seagreen]
	Health [fontcolor=mediumvioletred]
	node [fontsize=25]
	Love [fontcolor=orchid URL="https://en.wikipedia.org/wiki/Category:Love"]
	Love -- {
		Giving
		People
		Beauty
	}
	Success [fontcolor=goldenrod]
	Life -- {
		Nature
		Wellbeing
		Success
	}
	Peace [URL="https://en.wikipedia.org/wiki/Category:Peace"]
	Peace -- {
		Connection
		Relationship
		Caring
	}
	Health -- {
		Body
		Recreation
	}
	Mind [URL="https://en.wikipedia.org/wiki/Category:Mind"]
	Mind -- {
		Cognition
		Consciousness
		Intelligence
	}
	Soul [URL="https://en.wikipedia.org/wiki/Soul"]
	Soul -- {
		Emotions
		Self
		Meditation
	}
	node [fontsize=""]
	Beauty -- {
		Esthetics
		Art
	}
	People -- {
		Family
		Partner
		Hug
	}
	Giving -- {
		Feelings
		Support
	}
	Self -- {
		Delight
		Joy
		Expression 
	}
	Success -- {
		Creation
		Profit
		Win
		Career
	}
	Recreation -- {
		Leisure
		Sleep
	}
	Emotions [URL="https://en.wikipedia.org/wiki/Soul"]
	Emotions -- {
		Positiveness Tranquility
	}
	Self -- Emotions [weight=10 penwidth=1 style=dotted constraint=false]
	Body -- {
		Medicine Exercises Nutrition Water Heart
	}
	Wellbeing -- {
		Home Work Finance Clothes Transport
	}
	Relationship -- {
		Friends Community Society
	}
	Connection -- {
		Acceptance
		Forgiveness
		Gratitude
		Agreement
	}
	Caring -- {
		Respect
		Empathy
		Help
	}
	Consciousness -- {
		Awareness
	}
	Meditation -- {
		Contemplation Breath
	}
	Cognition -- {
		Imagination
		Perception
		Thinking
		Understanding
		Memory
	}
	Intelligence -- {
		Learning
		Experiment
		Education
	}
	Nature -- {
		Ocean
		Forest
		Pets
		Wildlife
	}
}`;
  return <Graphviz className="bob" dot={dot} />;
}

export default GraphvizPage;