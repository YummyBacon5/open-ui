/* eslint-disable */

import React from 'react'
import './anatomy.css'
import './breadcrumb-anatomy.css'

const BreadcrumbAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label for="show-slots"> Show slots</label>
      <div class="component-anatomy">
        <host name="breadcrumb" role="nav">
          <slot name="breadcrumb-container">
            <part name="ol">
              <part name="li [part=item]" data-slot>
                item
              </part>
              <part name="li [part=divider]" data-slot aria-hidden="true">
                divider
              </part>
            </part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default BreadcrumbAnatomy
