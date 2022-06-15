# 第四章 使用 Three.js 中的材质

## Three.js 中的材质类


## 常用的几种材质的使用

1. `MeshBasicMaterial` 基础网格材质
> * 不考虑光照影响
> * 简单几何体或线框渲染


2. `MeshDepthMaterial` 深度网格材质
> * 按深度绘制
> * 深度基于相机远近平面

3. 联合材质
> 使用 SceneUtils 中的工具方法 createMultiMaterialObject 创建联合材质

4. `MeshNormalMaterial` 法线网格材质
> 一种将法线映射到 RGB 颜色的材质
> 法向量： 与面垂直的向量
* ArrowHelper 用于模拟三维箭头的对象

5. 简单几何体应用多种材质
> 创建材质数组

* `Group` 和 `Object3D`一致，便于语意理解


## 高级材质的使用

1. `MeshPhongMaterial` Phong网格材质
> 高光

2. `MeshLambertMaterial` Lambert网格材质
> 非金属

3. `MeshStandardMaterial` 标准网格材质
> 基于物理渲染(PBR)的标准材质

4. `MeshPysicalMaterial` 物理网格材质
> MeshStandardMaterial 的扩展，提供了更高级的属性

5. `ShaderMaterial` 着色器材质
> 使用自定义 shader 渲染的材质


## 线性几何材质

1. `LineBasicMaterial` 线框基础材质

2. `LineDashedMaterial` 虚线线框材质