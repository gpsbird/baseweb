/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import {useStyletron} from '../styles/index.js';
import {mergeOverrideResources} from '../helpers/override.js';

import Icon from './icon.js';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys.js';
import type {IconPropsT, StyledComponentArgsT} from './types.js';

export default function TriangleRight(props: IconPropsT) {
  const [_, theme] = useStyletron();
  const {overrides = {}, svgRef, ...restProps} = props;
  const SvgOverride = mergeOverrideResources<StyledComponentArgsT>(
    // Icons from theme really targets the SVG override in the underlying Icon component, but
    // have props typed with IconPropsT. Provided the missing props inline below here.
    // $FlowFixMe
    {
      component:
        theme.icons && theme.icons.TriangleRight
          ? theme.icons.TriangleRight
          : null,
      props: {
        title: 'Triangle Right',
        viewBox: '0 0 24 24',
        ...omitDollarPrefixedKeys(restProps),
      },
    },
    overrides && overrides.Svg ? overrides.Svg : {},
  );
  return (
    <Icon
      title="Triangle Right"
      viewBox="0 0 24 24"
      overrides={{Svg: SvgOverride}}
      ref={svgRef}
      {...restProps}
    >
      <path d="M15.2929 11.2929L10.8536 6.85355C10.5386 6.53857 10 6.76165 10 7.20711L10 16.7929C10 17.2383 10.5386 17.4614 10.8536 17.1464L15.2929 12.7071C15.6834 12.3166 15.6834 11.6834 15.2929 11.2929Z" />
    </Icon>
  );
}
