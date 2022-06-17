import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 3rem 0;
  ol {
    font-size: 0.9em;
  }

  .bookmark {
    --background-default: #fff;
    --background-hover: #FAFBFF;
    --text-color: #404660;
    --icon-color-default: #8A91B4;
    --icon-color-active: #F04949;
    --default-position: 32px;
    --default-y: 0px;
    --icon-background-height: 19px;
    --shadow: #{rgba(#001384, .08)};
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    outline: none;
    background: none;
    border: none;
    padding: 2px 18px 2px 5px;
    margin: 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    &.dark {
        --background-default: #1E2235;
        --background-hover: #171827;
        --text-color: #F9FAFF;
        --icon-color-default: #8A91B4;
        --icon-color-active: #F04949;
        --shadow: #{rgba(#001384, .16)};
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        backface-visibility: hidden;
        box-shadow: 0 var(--shadow-y, 2px) var(--shadow-blur, 3px) var(--shadow);
        background: var(--background, var(--background-default));
        transform: scale(var(--scale-x, 1), var(--scale-y, 1)) translateZ(0);
        transition: box-shadow .2s, transform .4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background .2s;
    }
    &:active {
        --shadow-y: 1px;
        --shadow-blur: 2px;
        --scale-x: .975;
        --scale-y: .94;
    }
    &:hover {
        --background: var(--background-hover);
    }
    &.marked {
        --icon-color: var(--icon-color-active);
    }
    .icon {
        position: relative;
        z-index: 1;
        transform: scale(.62);
        &:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 9px;
            width: 18px;
            height: 19px;
            border-radius: 1px;
            clip-path: inset(0 -1px var(--icon-background-height) -1px round 1px);
            background: var(--icon-color, var(--icon-color-default));
            transition: background var(--duration, .5s) ease .01s;
        }
        svg {
            display: block;
            width: 36px;
            height: 36px;
            stroke: var(--icon-color, var(--icon-color-default));
            stroke-width: 2px;
            stroke-linejoin: round;
            stroke-linecap: round;
            position: relative;
            z-index: 1;
            transform: translateZ(0);
            clip-path: inset(5px 0 0 0);
            path {
                fill: var(--fill, var(--background, var(--background-default)));
                transition: fill var(--duration, .5s) ease .01s, stroke var(--duration, .5s) ease .01s;
                &.default {
                    --fill: var(--default-fill, var(--background, var(--background-default)));
                    clip-path: circle(var(--default-position) at 50% 100%);
                }
                &.filled {
                    --fill: var(--icon-color, var(--icon-color-default));
                }
                &.default,
                &.filled {
                    transform: translateY(var(--default-y));
                }
            }
        }
    }
    span {
        position: relative;
        z-index: 1;
        display: block;
        margin-left: -2px;
    }
}

.bookmark {
    &.dark {
        --background-default: #1E2235;
        --background-hover: #171827;
        --text-color: #F9FAFF;
        --icon-color-default: #8A91B4;
        --icon-color-active: #F04949;
        --shadow: #{rgba(#001384, .16)};
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
    &:before,
    &:after {
        box-sizing: inherit;
    }
}

// Center & dribbble
body {
    min-height: 100vh;
    display: flex;
    font-family: 'Inter', Arial;
    justify-content: center;
    align-items: center;
    background: #ECEFFC;
    .bookmark {
        margin: 0 16px;
    }
   
    }
    
    }
}



`;

export default function Instructions() {
  return (

    
    <Styles>
      <h2>Buy Me a Coffee</h2>
      <ol>
      <p>If you found this tool useful, please consider making a donation.</p>
      <p>Why buy me a coffee? No third-party ads, no affiliate links, no tracking cookies. Thanks.</p>

<button class="bookmark">
    <div class="icon">
        <svg viewBox="0 0 36 36">
            <path class="filled" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
            <path class="default" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
            <path class="corner" d="M10 6C10 6 14.8758 6 18 6C21.1242 6 26 6 26 6C26 6 26 6 26 6H10C10 6 10 6 10 6Z" />
        </svg>
    </div>
    <span><a href="https://ko-fi.com/passwordgenlive">Buy Me a Coffee</a></span>
</button>


      </ol>
    </Styles>
  );
}




